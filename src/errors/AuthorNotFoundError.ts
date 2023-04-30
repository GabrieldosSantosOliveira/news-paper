export class AuthorNotFoundError extends Error {
  constructor() {
    super('Usuário não encontrado');
    this.name = 'AuthorNotFoundError';
  }
}
