import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldSplittingComponent } from './form-field-splitting.component';

describe('FormFieldSplittingComponent', () => {
  let component: FormFieldSplittingComponent;
  let fixture: ComponentFixture<FormFieldSplittingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldSplittingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldSplittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
