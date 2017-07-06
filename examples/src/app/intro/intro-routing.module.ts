import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroRootComponent } from 'app/intro/intro-root/intro-root.component';
import { MyFirstFormGroupComponent } from 'app/intro/my-first-form-group/my-first-form-group.component';
import { NestedFormComponent } from 'app/intro/nested-form/nested-form.component';

const routes: Routes = [
  {
    path: '',
    component: IntroRootComponent,
    children: [
      {
        path: 'my-first-form-group',
        component: MyFirstFormGroupComponent,
      },
      {
        path: 'nested-form',
        component: NestedFormComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class IntroRoutingModule { }
