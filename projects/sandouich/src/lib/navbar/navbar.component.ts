import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sand-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  site_title = "Mon site";
  open = false ;

  @Input() currentRoute: string = "";

  constructor() { }

  ngOnInit(): void { }

  handleMenu($event: boolean) {
    this.open = $event;
  }

}