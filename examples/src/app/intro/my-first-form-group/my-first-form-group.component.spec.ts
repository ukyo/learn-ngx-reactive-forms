import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstFormGroupComponent } from './my-first-form-group.component';

describe('MyFirstFormGroupComponent', () => {
  let component: MyFirstFormGroupComponent;
  let fixture: ComponentFixture<MyFirstFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
