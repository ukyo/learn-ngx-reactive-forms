import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableRootComponent } from 'app/observable/observable-root/observable-root.component';

const routes: Routes = [
  {
    path: '',
    component: ObservableRootComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }
