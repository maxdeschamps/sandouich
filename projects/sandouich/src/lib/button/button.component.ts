import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sand-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() class?: string = "default";
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

}
