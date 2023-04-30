import { env } from '@/config/env';
import { UnexpectedError } from '@/errors/UnexpectedError';
import { makeUrl } from '@/factories/makeUrl';
import { HttpStatusCode } from '@/helpers/http/HttpStatusCode';
import { HttpService } from '@/interfaces/HttpService';
import { AuthDto } from '@/models/AuthDto';

export class ServiceSingUpWithGoogleProvider {
  constructor(private readonly httpService: HttpService) {}
  async handle(googleAccessToken: string) {
    const { data, statusCode } = await this.httpService.post<AuthDto>(
      makeUrl(env.BASE_URL, '/api/author/google'),
      {
        body: { accessToken: googleAccessToken },
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
