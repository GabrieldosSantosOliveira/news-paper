import { env } from '@/config/env';
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
    if (statusCode === HttpStatusCode.OK) {
      return { data, statusCode };
    }
    throw new UnexpectedError();
  }
  async getAllNoticeByCategory(page: number, categoryTitle: string) {
    return await this.httpService.get<NoticePaginationDto>(
      makeUrl(
        env.BASE_URL,
        `/api/notice/category/${categoryTitle}?page=${page}`,
      ),
    );
  }
  async getOneNotice(noticeId: string) {
    return await this.httpService.get<NoticeDto>(
      makeUrl(env.BASE_URL, `/api/notice/${noticeId}`),
    );
  }
}
