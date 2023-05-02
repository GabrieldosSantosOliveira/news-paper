import { env } from '@/config/env';
import { AuthorNotFoundError } from '@/errors/AuthorNotFoundError';
import { UnexpectedError } from '@/errors/UnexpectedError';
import { makeUrl } from '@/factories/makeUrl';
import { HttpStatusCode } from '@/helpers/http/HttpStatusCode';
import { HttpService } from '@/interfaces/HttpService';

export class ServiceForgotPassword {
  constructor(private readonly httpService: HttpService) {}
  async sendCodeForEmail(email: string) {
    const { data, statusCode } = await this.httpService.post(
      makeUrl(env.BASE_URL, '/api/auth/forgot-password'),
      {
        body: {
          email,
        },
      },
    );
    switch (statusCode) {
      case HttpStatusCode.NO_CONTENT:
        return { data, statusCode };
        break;
      case HttpStatusCode.NOT_FOUND:
        throw new AuthorNotFoundError();
        break;
      default:
        throw new UnexpectedError();
        break;
    }
  }
}
