import { Component, Input, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd} from '@angular/router';

@Component({
  selector: 'sand-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  open = false;

  @Input() navbarTitle: string = "";

  constructor() { }

  ngOnInit(): void { }

  handleMenu($event: boolean) {
    this.open = $event;
  }

}