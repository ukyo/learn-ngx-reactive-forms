import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableRootComponent } from './observable-root.component';
import { ObservableModule } from 'app/observable/observable.module';

describe('ObservableRootComponent', () => {
  let component: ObservableRootComponent;
  let fixture: ComponentFixture<ObservableRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ObservableModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
