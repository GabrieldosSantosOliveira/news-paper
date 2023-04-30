import { env } from '@/config';
import { UnexpectedError } from '@/errors';
import { makeUrl } from '@/factories';
import { HttpStatusCode } from '@/helpers';
import { HttpService } from '@/interfaces';
import { AuthDto } from '@/models';

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
