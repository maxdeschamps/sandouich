import { Component, OnInit, Input, Output, EventEmitter, NgZone } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'sand-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() formValue = new FormControl();

  @Input() label:string = "";
  @Input() type:string = "text";
  @Input() placeholder:string = "";

  @Output() valueChange = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }





}
