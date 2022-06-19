import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { IDatePickerConfig } from "ng2-date-picker";
import { DatePipe } from "@angular/common";
import * as dayjs from 'dayjs';
import 'dayjs/locale/fr';

dayjs.locale('fr');

@Component({
  selector: 'sand-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: [
    './datepicker.component.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  providers: [DatePipe]
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
    disableKeypress: true,
  };

  constructor(private readonly datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  @Output() datepickerValueChange = new EventEmitter<any>();

  onChange (selectedDate: any) {
    let date = null;
    if (selectedDate != undefined) {
      date = this.datePipe.transform(new Date(selectedDate), 'yyyy-MM-dd HH:mm');
    }
    this.datepickerValueChange.emit(date);
  }
}
