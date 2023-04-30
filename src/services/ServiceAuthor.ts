import { env } from '@/config/env';
import { AuthorNotFoundError } from '@/errors/AuthorNotFoundError';
import { UnauthorizedError } from '@/errors/UnauthorizedError';
import { UnexpectedError } from '@/errors/UnexpectedError';
import { makeUrl } from '@/factories/makeUrl';
import { HttpStatusCode } from '@/helpers/http/HttpStatusCode';
import { HttpService } from '@/interfaces/HttpService';
import { AuthorDto } from '@/models/AuthorDto';

export class ServiceAuthor {
  constructor(private readonly httpService: HttpService) {}
  async get(accessToken: string) {
    const { data, statusCode } = await this.httpService.get<AuthorDto>(
      makeUrl(env.BASE_URL, '/api/me'),
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    );
    switch (statusCode) {
      case HttpStatusCode.OK:
        return { data, statusCode };
        break;
      case HttpStatusCode.NOT_FOUND:
        throw new AuthorNotFoundError();
        break;
      case HttpStatusCode.UNAUTHORIZED_ERROR:
        throw new UnauthorizedError('Credenciais inválidas');
        break;
      default:
        throw new UnexpectedError();
        break;
    }
  }
}
