import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sand-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() listed: boolean = false;

  constructor() { }

  ngOnInit(): void { }

}
