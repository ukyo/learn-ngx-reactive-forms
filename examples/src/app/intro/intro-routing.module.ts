import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroRootComponent } from 'app/intro/intro-root/intro-root.component';

const routes: Routes = [
  {
    path: '',
    component: IntroRootComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class IntroRoutingModule { }
