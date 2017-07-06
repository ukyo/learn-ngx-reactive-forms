import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableRootComponent } from 'app/observable/observable-root/observable-root.component';
import { ValueChangesAndStatusChangesComponent } from 'app/observable/value-changes-and-status-changes/value-changes-and-status-changes.component';
import { IncrementalSearchComponent } from 'app/observable/incremental-search/incremental-search.component';
import { UpdateValueAndStatusManuallyComponent } from 'app/observable/update-value-and-status-manually/update-value-and-status-manually.component';

const routes: Routes = [
  {
    path: '',
    component: ObservableRootComponent,
    children: [
      {
        path: 'value-changes-and-status-changes',
        component: ValueChangesAndStatusChangesComponent,
      },
      {
        path: 'incremental-search',
        component: IncrementalSearchComponent,
      },
      {
        path: 'update-value-and-status-manually',
        component: UpdateValueAndStatusManuallyComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }
