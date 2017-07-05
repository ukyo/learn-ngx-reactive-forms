import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledFormComponent } from './disabled-form.component';
import { OtherStatusesModule } from 'app/other-statuses/other-statuses.module';

describe('DisabledFormComponent', () => {
  let component: DisabledFormComponent;
  let fixture: ComponentFixture<DisabledFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OtherStatusesModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
