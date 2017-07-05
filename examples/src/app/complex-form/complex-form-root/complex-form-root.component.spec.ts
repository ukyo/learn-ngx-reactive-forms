import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexFormRootComponent } from './complex-form-root.component';

describe('ComplexFormRootComponent', () => {
  let component: ComplexFormRootComponent;
  let fixture: ComponentFixture<ComplexFormRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexFormRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexFormRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
