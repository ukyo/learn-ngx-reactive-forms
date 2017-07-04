import { Injectable } from '@angular/core';

const emails = ['foo@foo.com', 'bar@bar.com', 'bax@baz.com'];

@Injectable()
export class EmailExistsApiService {

  constructor() { }

  exists(email: string) {
    // emulate xhr.
    return new Promise(resolve => {
      setTimeout(() => emails.some(s => s === email), Math.random() * 1000);
    });
  }
}
