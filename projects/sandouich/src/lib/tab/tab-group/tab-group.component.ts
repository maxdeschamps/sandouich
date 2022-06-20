import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TabItemComponent } from "../tab-item/tab-item.component";

@Component({
  selector: 'sand-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements OnInit {
  @Input() color: string = "";
  tabs: TabItemComponent[] = []

  constructor() { }

  ngOnInit(): void {
  }

  @Output() changeTab = new EventEmitter();

  selectTab(tab: TabItemComponent) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
    this.changeTab.emit();
  }

  addTab(tab: TabItemComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }

}
