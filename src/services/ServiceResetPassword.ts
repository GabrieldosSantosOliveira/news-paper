import { env } from '@/config/env';
import { AuthorNotFoundError } from '@/errors/AuthorNotFoundError';
import { UnauthorizedError } from '@/errors/UnauthorizedError';
import { UnexpectedError } from '@/errors/UnexpectedError';
import { makeUrl } from '@/factories/makeUrl';
import { HttpStatusCode } from '@/helpers/http/HttpStatusCode';
import { HttpService } from '@/interfaces/HttpService';
export interface ServiceResetPasswordResetPassword {
  email: string;
  code: string;
  passwordReset: string;
}
export class ServiceResetPassword {
  constructor(private readonly httpService: HttpService) {}

  async resetPassword({
    code,
    email,
    passwordReset,
  }: ServiceResetPasswordResetPassword) {
    const { data, statusCode } = await this.httpService.post(
      makeUrl(env.BASE_URL, '/api/auth/reset-password'),
      {
        body: {
          resetPasswordToken: code,
          email,
          passwordReset,
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
      case HttpStatusCode.UNAUTHORIZED_ERROR:
        throw new UnauthorizedError('Credenciais inválidas');
        break;
      default:
        throw new UnexpectedError();
        break;
    }
  }
}
