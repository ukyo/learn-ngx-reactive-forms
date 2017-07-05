import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherStatusesRootComponent } from './other-statuses-root.component';

describe('OtherStatusesRootComponent', () => {
  let component: OtherStatusesRootComponent;
  let fixture: ComponentFixture<OtherStatusesRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherStatusesRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherStatusesRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
