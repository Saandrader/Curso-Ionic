import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Curso6Page } from './curso6.page';

const routes: Routes = [
  {
    path: '',
    component: Curso6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Curso6PageRoutingModule {}
