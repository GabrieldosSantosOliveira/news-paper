import { env } from '@/config';
import { UnexpectedError } from '@/errors/UnexpectedError';
import { makeUrl } from '@/factories';
import { HttpStatusCode } from '@/helpers/http/HttpStatusCode';
import { HttpService } from '@/interfaces';
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
  async getNotice(noticeId: string) {
    return await this.httpService.get<NoticeDto>(
      makeUrl(env.BASE_URL, `/api/notice/${noticeId}`),
    );
  }
}
