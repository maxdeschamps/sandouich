import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import { getYear } from 'date-fns';
import locale from 'date-fns/locale/fr';

@Component({
  selector: 'sand-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  date = new Date();
  // options sample with default values
  options: DatepickerOptions = {
    minYear: getYear(new Date()) - 15,
    maxYear: getYear(new Date()) + 30,
    placeholder: '',
    format: 'dd LLLL yyyy',
    formatTitle: 'LLLL yyyy',
    formatDays: 'dd',
    firstCalendarDay: 0,
    locale: locale,
    position: 'top',
    inputClass: '',
    calendarClass: 'datepicker-default',
    scrollBarColor: '#dfe3e9',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
