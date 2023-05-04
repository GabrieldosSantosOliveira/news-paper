import { env } from '@/config/env';
import { CategoryNotFoundError } from '@/errors/CategoryNotFoundError';
import { NoticeNotFoundError } from '@/errors/NoticeNotFoundError copy';
import { UnexpectedError } from '@/errors/UnexpectedError';
import { makeUrl } from '@/factories/makeUrl';
import { HttpStatusCode } from '@/helpers/http/HttpStatusCode';
import { HttpService } from '@/interfaces/HttpService';
import { NoticeDto } from '@/models/NoticeDto';
import { NoticePaginationDto } from '@/models/NoticePaginationDto';
export class ServiceNotice {
  constructor(private httpService: HttpService) {}
  async getAllNotice(page: number) {
    const { data, statusCode } =
      await this.httpService.get<NoticePaginationDto>(
        makeUrl(env.BASE_URL, `/api/notice?page=${page}`),
      );
    switch (statusCode) {
      case HttpStatusCode.OK:
        return { data, statusCode };
        break;
      default:
        throw new UnexpectedError();
        break;
    }
  }
  async getAllNoticeByCategory(page: number, categoryTitle: string) {
    const { data, statusCode } =
      await this.httpService.get<NoticePaginationDto>(
        makeUrl(
          env.BASE_URL,
          `/api/notice/category/${categoryTitle}?page=${page}`,
        ),
      );
    switch (statusCode) {
      case HttpStatusCode.OK:
        return { data, statusCode };
        break;
      case HttpStatusCode.NOT_FOUND:
        throw new CategoryNotFoundError();
        break;
      default:
        throw new UnexpectedError();
        break;
    }
  }
  async getOneNotice(noticeId: string) {
    const { data, statusCode } = await this.httpService.get<NoticeDto>(
      makeUrl(env.BASE_URL, `/api/notice/${noticeId}`),
    );
    switch (statusCode) {
      case HttpStatusCode.OK:
        return { data, statusCode };
        break;
      case HttpStatusCode.NOT_FOUND:
        throw new NoticeNotFoundError();
        break;
      default:
        throw new UnexpectedError();
        break;
    }
  }
}
