import { TestBed, inject } from '@angular/core/testing';

import { ProductFormGroupFactoryService } from './product-form-group-factory.service';

describe('ProductFormGroupFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductFormGroupFactoryService]
    });
  });

  it('should be created', inject([ProductFormGroupFactoryService], (service: ProductFormGroupFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
