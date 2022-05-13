import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'sand-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() name = new FormControl();

  @Input() label:string = "";
  @Input() type:string = "text";
  @Input() placeholder:string = "";


  constructor() { }

  ngOnInit(): void {
  }



}
