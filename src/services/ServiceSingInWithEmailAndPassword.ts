import { env } from '@/config/env';
import { AuthorAlreadyExistsError } from '@/errors/AuthorAlreadyExistsError';
import { UnexpectedError } from '@/errors/UnexpectedError';
import { makeUrl } from '@/factories/makeUrl';
import { HttpStatusCode } from '@/helpers/http/HttpStatusCode';
import { HttpService } from '@/interfaces/HttpService';
import { AuthDto } from '@/models/AuthDto';
export interface ServiceSingInWithEmailAndPasswordParams {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
}
export class ServiceSingInWithEmailAndPassword {
  constructor(private readonly httpService: HttpService) {}
  async handle({
    email,
    firstName,
    lastName,
    password,
  }: ServiceSingInWithEmailAndPasswordParams) {
    const { data, statusCode } = await this.httpService.post<AuthDto>(
      makeUrl(env.BASE_URL, '/api/author'),
      {
        body: {
          email,
          firstName,
          lastName,
          password,
        },
      },
    );
    switch (statusCode) {
      case HttpStatusCode.CREATED:
        return { data, statusCode };
        break;
      case HttpStatusCode.CONFLICT:
        throw new AuthorAlreadyExistsError();
        break;
      default:
        throw new UnexpectedError();
        break;
    }
  }
}
