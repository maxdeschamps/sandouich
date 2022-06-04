import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'sand-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor() { }

  @Input() formValue = new FormControl();

  @Input() arrayItems: any;

  @Output() event: EventEmitter<number> = new EventEmitter<number>();

  onChange(idSelected: number){
    this.event.emit(idSelected);
  }

  ngOnInit(): void {
  }



}
