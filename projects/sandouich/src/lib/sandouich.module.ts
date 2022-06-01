import { NgModule } from '@angular/core';
import { SandouichComponent } from './sandouich.component';
import { CardComponent } from './card/card.component';
import { TabGroupComponent } from './tab/tab-group/tab-group.component';
import { TabItemComponent } from './tab/tab-item/tab-item.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from "@angular/common"
import { ListComponent } from "./list/list.component";
import { ListItemComponent } from './list/list-item/list-item.component';
import { InputComponent } from "./input/input.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BurgerComponent } from './burger/burger.component';
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
    InputComponent,
    ContainerComponent,
    NavbarComponent,
    BurgerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SandouichComponent,
    CardComponent,
    TabGroupComponent,
    TabItemComponent,
    ButtonComponent,
    ListComponent,
    ListItemComponent,
    InputComponent,
    ContainerComponent,
    NavbarComponent,
    BurgerComponent
  ]
})
export class SandouichModule { }
