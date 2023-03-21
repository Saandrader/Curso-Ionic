import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Curso6PageRoutingModule } from './curso6-routing.module';

import { Curso6Page } from './curso6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Curso6PageRoutingModule
  ],
  declarations: [Curso6Page]
})
export class Curso6PageModule {}
