import { TestBed, inject } from '@angular/core/testing';

import { SimpleRecursiveFormGroupFactoryService } from './simple-recursive-form-group-factory.service';

describe('SimpleRecursiveFormGroupFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleRecursiveFormGroupFactoryService]
    });
  });

  it('should be created', inject([SimpleRecursiveFormGroupFactoryService], (service: SimpleRecursiveFormGroupFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
