import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sand-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit {

  @Input() src: string = '';
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() height: string = '';
  @Input() width: string = '';

  constructor() {}

  ngOnInit(): void {
  }
}
