import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormFieldComponent } from './product-form-field.component';

describe('ProductFormFieldComponent', () => {
  let component: ProductFormFieldComponent;
  let fixture: ComponentFixture<ProductFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
