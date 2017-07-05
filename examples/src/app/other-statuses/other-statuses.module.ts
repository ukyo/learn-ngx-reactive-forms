import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherStatusesRoutingModule } from './other-statuses-routing.module';
import { OtherStatusesRootComponent } from './other-statuses-root/other-statuses-root.component';
import { DisabledFormComponent } from './disabled-form/disabled-form.component';
import { TouchedAndDirtyComponent } from './touched-and-dirty/touched-and-dirty.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OtherStatusesRoutingModule
  ],
  declarations: [OtherStatusesRootComponent, DisabledFormComponent, TouchedAndDirtyComponent, SubmittedComponent]
})
export class OtherStatusesModule { }
