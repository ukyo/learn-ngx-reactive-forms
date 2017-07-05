import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroRootComponent } from './intro-root.component';
import { IntroModule } from 'app/intro/intro.module';

describe('IntroRootComponent', () => {
  let component: IntroRootComponent;
  let fixture: ComponentFixture<IntroRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ IntroModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
