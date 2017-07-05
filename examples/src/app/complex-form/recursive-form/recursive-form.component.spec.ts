import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveFormComponent } from './recursive-form.component';

describe('RecursiveFormComponent', () => {
  let component: RecursiveFormComponent;
  let fixture: ComponentFixture<RecursiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
