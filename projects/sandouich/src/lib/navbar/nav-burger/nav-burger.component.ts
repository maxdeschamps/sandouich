import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'sand-nav-burger',
  templateUrl: './nav-burger.component.html',
  styleUrls: ['./nav-burger.component.scss']
})

export class NavBurgerComponent implements OnInit {
  @Output() event: EventEmitter<boolean> = new EventEmitter<boolean>();
  clicked = false;

  constructor() { }

  ngOnInit(): void { }

  handleMenuEvent() {
    this.clicked = !this.clicked;
    this.event.emit(this.clicked);
  }
}