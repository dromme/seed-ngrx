import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    loadChildren: () =>
      import('./home/home.module').then( mod => mod.HomeModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
