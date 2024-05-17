export default class ErrorRepository {
  constructor() {
    this.repository = new Map();
    this.repository.set(200, 'Ok');
    this.repository.set(302, 'Found');
    this.repository.set(304, 'Not modified');
    this.repository.set(400, 'Bad request');
    this.repository.set(404, 'Not found');
    this.repository.set(500, 'Internal Server Error');
  }

  translate(code) {
    if (this.repository.has(code)) {
      return this.repository.get(code);
    }
    return 'Unknown error';
  }
}
