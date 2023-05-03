import { env } from '@/config/env';
import { UnexpectedError } from '@/errors/UnexpectedError';
import { makeUrl } from '@/factories/makeUrl';
import { HttpStatusCode } from '@/helpers/http/HttpStatusCode';
import { HttpService } from '@/interfaces/HttpService';
export interface ServiceRefreshTokenParams {
  refreshToken: string;
}
export interface ServiceRefreshTokenResponse {
  accessToken: string;
}
export class ServiceRefreshToken {
  constructor(private readonly httpService: HttpService) {}
  async handle({ refreshToken }: ServiceRefreshTokenParams) {
    const { data, statusCode } =
      await this.httpService.post<ServiceRefreshTokenResponse>(
        makeUrl(env.BASE_URL, '/api/refreshToken'),
        {
          body: {
            refreshToken,
          },
        },
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
}
