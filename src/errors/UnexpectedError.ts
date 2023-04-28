export class UnexpectedError extends Error {
  constructor() {
    super('Algo de Errado ocorreu, tente novamente mais tarde');
    this.name = 'UnexpectedError';
  }
}
