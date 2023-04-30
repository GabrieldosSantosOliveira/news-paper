import { env } from '@/config';
import { UnexpectedError } from '@/errors';
import { AuthorNotFoundError } from '@/errors/AuthorNotFoundError';
import { UnauthorizedError } from '@/errors/UnauthorizedError';
import { makeUrl } from '@/factories';
import { HttpStatusCode } from '@/helpers';
import { HttpService } from '@/interfaces';
import { AuthorDto } from '@/models';

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
