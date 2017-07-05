import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationRootComponent } from './validation-root.component';
import { ValidationModule } from 'app/validation/validation.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ValidationRootComponent', () => {
  let component: ValidationRootComponent;
  let fixture: ComponentFixture<ValidationRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ValidationModule,
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
