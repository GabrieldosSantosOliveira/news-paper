export class AuthorAlreadyExistsError extends Error {
  constructor() {
    super('Usuário já cadastrado');
    this.name = 'AuthorAlreadyExistsError';
  }
}
