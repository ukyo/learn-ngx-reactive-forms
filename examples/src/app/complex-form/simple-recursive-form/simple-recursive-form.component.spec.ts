import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRecursiveFormComponent } from './simple-recursive-form.component';

describe('SimpleRecursiveFormComponent', () => {
  let component: SimpleRecursiveFormComponent;
  let fixture: ComponentFixture<SimpleRecursiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleRecursiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRecursiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
