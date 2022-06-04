import { Component, OnInit, Input } from '@angular/core';
import {TabGroupComponent} from "../tab-group/tab-group.component";

@Component({
  selector: 'sand-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent implements OnInit {

  @Input()
  label: string = "";

  active: boolean = false;


  constructor(tabs: TabGroupComponent) {
    tabs.addTab(this)
  }

  ngOnInit(): void {
  }

}
