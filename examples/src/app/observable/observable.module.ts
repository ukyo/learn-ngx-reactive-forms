import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservableRootComponent } from './observable-root/observable-root.component';
import { ValidationModule } from 'app/validation/validation.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ObservableRoutingModule,
    ValidationModule,
  ],
  declarations: [ObservableRootComponent]
})
export class ObservableModule { }
