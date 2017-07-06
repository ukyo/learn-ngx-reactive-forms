import { TestBed, inject } from '@angular/core/testing';

import { NestedFormGroupFactoryService } from './nested-form-group-factory.service';

describe('NestedFormGroupFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NestedFormGroupFactoryService]
    });
  });

  it('should be created', inject([NestedFormGroupFactoryService], (service: NestedFormGroupFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
