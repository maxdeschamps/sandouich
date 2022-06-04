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
  datePickerConfig = {
  };

  constructor() { }

  ngOnInit(): void {
  }

}
