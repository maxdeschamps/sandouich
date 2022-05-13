import { NgModule } from '@angular/core';
import { SandouichComponent } from './sandouich.component';
import { CardComponent } from './card/card.component';
import { TabGroupComponent } from './tab/tab-group/tab-group.component';
import { TabItemComponent } from './tab/tab-item/tab-item.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from "@angular/common"
import {ListComponent} from "./list/list.component";
import { ListItemComponent } from './list/list-item/list-item.component';

const COMPONENTS = [SandouichComponent];

@NgModule({
  declarations: [
    COMPONENTS,
    SandouichComponent,
    CardComponent,
    TabGroupComponent,
    TabItemComponent,
    ButtonComponent,
    ListComponent,
    ListItemComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SandouichComponent,
    CardComponent,
    TabGroupComponent,
    TabItemComponent,
    ButtonComponent,
    ListComponent,
    ListItemComponent,
  ]
})
export class SandouichModule { }
