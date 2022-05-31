import { Component , Input, Output , EventEmitter} from '@angular/core';
import TableHeader , {TableRow } from './table.interfaces';

@Component({
  selector: 'sand-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent  {

  _headers: TableHeader[] = []

  _data: TableRow[][] = [];

  get headers():  TableHeader[] {
    return this._headers.sort( (x,y)=>{
      if(x.order > y.order) return 1;
      else if(x.order < y.order) return -1;
      else return 0;
    });
  }
  @Input() set headers(value:  TableHeader[]) {
      this._headers = value;
  }

  get data():  TableRow[][]  {
    const data :TableRow[][] = [];
    this._data.forEach((row)=>{
      const rowData :TableRow[]= []
      this.headers.forEach((header)=>{
        const currentRow = row.filter((x :any ) => x.headerName == header.name);
        if(currentRow.length > 0){
          currentRow[0].headerLabel = header.label;
          rowData.push(currentRow[0]);
        }else{
          rowData.push({headerName: header.name, value: "", headerLabel: header.label});
        }
      });
      data.push(rowData);
    });
    return data;
  }

  @Input() set data(value:  TableRow[][]) {
    this._data = value;
  }

  @Input() color :string = "primary";

  @Output() clickLineEvent = new EventEmitter<any>();

  constructor() { }

  onClickLine(line:any){
    this.clickLineEvent.emit(line);
  }

}
