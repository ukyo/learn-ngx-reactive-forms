import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherStatusesRootComponent } from 'app/other-statuses/other-statuses-root/other-statuses-root.component';
import { DisabledFormComponent } from 'app/other-statuses/disabled-form/disabled-form.component';
import { TouchedAndDirtyComponent } from 'app/other-statuses/touched-and-dirty/touched-and-dirty.component';
import { SubmittedFormComponent } from 'app/other-statuses/submitted-form/submitted-form.component';

const routes: Routes = [
  {
    path: '',
    component: OtherStatusesRootComponent,
    children: [
      {
        path: 'disabled-form',
        component: DisabledFormComponent,
      },
      {
        path: 'touched-and-dirty',
        component: TouchedAndDirtyComponent,
      },
      {
        path: 'submitted-form',
        component: SubmittedFormComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherStatusesRoutingModule { }
