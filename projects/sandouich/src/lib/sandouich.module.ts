import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatepickerModule } from 'ng2-datepicker';
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
import { NavBurgerComponent } from './navbar/nav-burger/nav-burger.component';
import { NavLinkComponent } from './navbar/nav-link/nav-link.component';
import { ModalComponent } from './modal/modal.component';
import { TableComponent } from './table/table.component';
import { IframeComponent } from './iframe/iframe.component';
import { SafePipe } from './pipe/safe.pipe';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectComponent } from './select/select.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule } from '@angular/router';
import { DatepickerComponent } from './datepicker/datepicker.component';

const COMPONENTS = [
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
  NavBurgerComponent,
  ModalComponent,
  TableComponent,
  IframeComponent,
  NavLinkComponent,
  GalleryComponent,
  SelectComponent,
  DatepickerComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    SafePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    RouterModule,
    BrowserModule,
    DatepickerModule,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class SandouichModule { }
