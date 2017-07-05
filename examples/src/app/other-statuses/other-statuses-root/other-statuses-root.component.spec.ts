import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherStatusesRootComponent } from './other-statuses-root.component';
import { RouterTestingModule } from '@angular/router/testing';
import { OtherStatusesModule } from 'app/other-statuses/other-statuses.module';

describe('OtherStatusesRootComponent', () => {
  let component: OtherStatusesRootComponent;
  let fixture: ComponentFixture<OtherStatusesRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        OtherStatusesModule,
        RouterTestingModule,
      ]
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
