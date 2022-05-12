import { NgModule } from '@angular/core';
import { SandouichComponent } from './sandouich.component';
import { CardComponent } from './card/card.component';

const COMPONENTS = [SandouichComponent];

@NgModule({
  declarations: [
    COMPONENTS,
    SandouichComponent,
    CardComponent,
  ],
  imports: [
  ],
  exports: [
    SandouichComponent,
    CardComponent
  ]
})
export class SandouichModule { }
