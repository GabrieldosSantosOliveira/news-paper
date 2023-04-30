import { env } from '@/config/env';
import { AuthorNotFoundError } from '@/errors/AuthorNotFoundError';
import { UnauthorizedError } from '@/errors/UnauthorizedError';
import { UnexpectedError } from '@/errors/UnexpectedError';
import { makeUrl } from '@/factories/makeUrl';
import { HttpStatusCode } from '@/helpers/http/HttpStatusCode';
import { HttpService } from '@/interfaces/HttpService';
import { AuthDto } from '@/models/AuthDto';
export interface ServiceLoginParams {
  email: string;
  password: string;
}
export class ServiceSingUpWithEmailAndPassword {
  constructor(private httpService: HttpService) {}
  async handle({ email, password }: ServiceLoginParams) {
    const { data, statusCode } = await this.httpService.post<AuthDto>(
      makeUrl(env.BASE_URL, '/api/login'),
      {
        body: { email, password },
      },
    );
    switch (statusCode) {
      case HttpStatusCode.OK:
        return { data, statusCode };
        break;
      case HttpStatusCode.UNAUTHORIZED_ERROR:
        throw new UnauthorizedError(
          'O email ou senha informado está incorreto',
        );
        break;
      case HttpStatusCode.NOT_FOUND:
        throw new AuthorNotFoundError();
        break;
      case HttpStatusCode.BAD_REQUEST:
        throw new Error('Email ou senha inválidos');
        break;
      default:
        throw new UnexpectedError();
        break;
    }
  }
}
