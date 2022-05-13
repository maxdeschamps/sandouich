import { NgModule } from '@angular/core';
import { SandouichComponent } from './sandouich.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

const COMPONENTS = [SandouichComponent];

@NgModule({
  declarations: [
    COMPONENTS,
    SandouichComponent,
    CardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SandouichComponent,
    CardComponent
  ]
})
export class SandouichModule { }
