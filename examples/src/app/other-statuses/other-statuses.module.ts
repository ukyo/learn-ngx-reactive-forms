import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherStatusesRoutingModule } from './other-statuses-routing.module';
import { OtherStatusesRootComponent } from './other-statuses-root/other-statuses-root.component';
import { DisabledFormComponent } from './disabled-form/disabled-form.component';
import { TouchedAndDirtyComponent } from './touched-and-dirty/touched-and-dirty.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SubmittedFormComponent } from './submitted-form/submitted-form.component';
import { IntroModule } from 'app/intro/intro.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    OtherStatusesRoutingModule,
    IntroModule,
  ],
  declarations: [OtherStatusesRootComponent, DisabledFormComponent, TouchedAndDirtyComponent, SubmittedFormComponent]
})
export class OtherStatusesModule { }
