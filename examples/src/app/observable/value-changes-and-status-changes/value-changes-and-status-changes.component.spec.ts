import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueChangesAndStatusChangesComponent } from './value-changes-and-status-changes.component';

describe('ValueChangesAndStatusChangesComponent', () => {
  let component: ValueChangesAndStatusChangesComponent;
  let fixture: ComponentFixture<ValueChangesAndStatusChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueChangesAndStatusChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueChangesAndStatusChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
