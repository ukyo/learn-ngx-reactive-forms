import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchedAndDirtyComponent } from './touched-and-dirty.component';

describe('TouchedAndDirtyComponent', () => {
  let component: TouchedAndDirtyComponent;
  let fixture: ComponentFixture<TouchedAndDirtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchedAndDirtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchedAndDirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
