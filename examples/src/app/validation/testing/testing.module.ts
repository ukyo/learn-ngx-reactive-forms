import { NgModule } from '@angular/core';
import { EmailExistsApiService } from 'app/validation/email-exists-api.service';

export class EmailExistsApiMockService {
  nextExists: boolean;
  exists(email: string) {
    return Promise.resolve(this.nextExists);
  }
}

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    { provide: EmailExistsApiService, useClass: EmailExistsApiMockService }
  ],
})
export class ValidationTestingModule { }
