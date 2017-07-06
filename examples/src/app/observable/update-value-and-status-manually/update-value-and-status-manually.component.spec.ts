import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateValueAndStatusManuallyComponent } from './update-value-and-status-manually.component';

describe('UpdateValueAndStatusManuallyComponent', () => {
  let component: UpdateValueAndStatusManuallyComponent;
  let fixture: ComponentFixture<UpdateValueAndStatusManuallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateValueAndStatusManuallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateValueAndStatusManuallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
