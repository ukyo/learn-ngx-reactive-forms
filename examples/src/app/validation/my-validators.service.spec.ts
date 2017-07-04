import { TestBed, inject } from '@angular/core/testing';

import { MyValidatorsService } from './my-validators.service';

describe('MyValidatorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyValidatorsService]
    });
  });

  it('should be created', inject([MyValidatorsService], (service: MyValidatorsService) => {
    expect(service).toBeTruthy();
  }));
});
