import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sand-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() class?: string = "default";
  @Input() id: number|string = "";
  @Input() round: boolean = false;
  @Input() secondary: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.secondary === true) {
      this.class += " secondary";
    }

    if (this.round === true) {
      this.class += " round";
    }
  }

  @Output() clickButtonEvent = new EventEmitter<number|string>();

  onClickButton(id:number|string){
    if (id !== "") {
      this.clickButtonEvent.emit(id);
    }
  }
}
