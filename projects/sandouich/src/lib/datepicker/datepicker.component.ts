import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { IDatePickerConfig } from "ng2-date-picker";
import * as dayjs from 'dayjs';
import 'dayjs/locale/fr';

dayjs.locale('fr');

@Component({
  selector: 'sand-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: [
    './datepicker.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerComponent implements OnInit {
  date = new Date();
  @Input() label:string = "";
  @Input() mode:any = "daytime";
  @Input() datePickerConfig = <IDatePickerConfig>{
    locale: "fr",
    format: "DD/MM/YYYY HH:mm",
    monthFormat: "MMMM, YYYY",
    firstDayOfWeek: "mo",
    showTwentyFourHours: true,
    disableKeypress: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
