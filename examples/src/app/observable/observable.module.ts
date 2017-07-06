import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservableRootComponent } from './observable-root/observable-root.component';
import { ValidationModule } from 'app/validation/validation.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ValueChangesAndStatusChangesComponent } from './value-changes-and-status-changes/value-changes-and-status-changes.component';
import { IncrementalSearchComponent } from './incremental-search/incremental-search.component';
import { UpdateValueAndStatusManuallyComponent } from './update-value-and-status-manually/update-value-and-status-manually.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ObservableRoutingModule,
    ValidationModule,
  ],
  declarations: [ObservableRootComponent, ValueChangesAndStatusChangesComponent, IncrementalSearchComponent, UpdateValueAndStatusManuallyComponent]
})
export class ObservableModule { }
