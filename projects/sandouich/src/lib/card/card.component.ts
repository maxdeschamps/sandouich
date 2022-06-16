import {AfterContentInit, AfterViewInit, ViewEncapsulation, Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sand-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() displayHeader: boolean = false;
  @Input() displayBody: boolean = false;
  @Input() displayFooter: boolean = false;

  @Input() src?: string = '';
  @Input() color: string = '';

  constructor() { }

  ngOnInit(): void { }

}
