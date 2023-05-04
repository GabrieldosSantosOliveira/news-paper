export class NoticeNotFoundError extends Error {
  constructor() {
    super('Noticia não encontrada');
    this.name = 'NoticeNotFoundError';
  }
}
