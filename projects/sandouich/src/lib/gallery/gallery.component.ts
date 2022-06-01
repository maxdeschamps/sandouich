import { Component, OnInit } from '@angular/core';
import {ModalService} from "../service/modal.service";
import {TableHeader, TableRow} from "../table/table.interfaces";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'sand-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  title = 'Site name';

  displayed = true;

  //Iframe
  idFrame="frame-id";
  titleIFrame = "Title Iframe";
  widthIFrame = "400px";
  heightIFrame = "400px";
  src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.818693535373!2d4.8373755327444306!3d45.74568000348575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea47ef557179%3A0x9c043d6c0f43647f!2sLyon%20Ynov%20Campus!5e0!3m2!1sfr!2sfr!4v1653992335069!5m2!1sfr!2sfr";

  hours = new FormControl();

  headers : TableHeader[] = [
    {
      label :'Status',
      name :'status',
      order :3
    },
    {
      label :'Id',
      name :'id',
      order :1
    },
    {
      label :'Name',
      name :'name',
      order :2
    },
  ];

  datadatatable : TableRow[][] = [
    [
      {
        headerName : 'id',
        value : '1'
      },
      {
        headerName : 'name',
        value : 'name 1'
      }
    ]
  ];

  constructor(public modalService: ModalService) {
  }

  ngOnInit(): void {
    this.modalService.display.subscribe(s => {
      this.displayed = s;
    });
  }

  openModal() {
    this.modalService.enable();
  }

  getLineClicked(event :any){
    console.log(event);
  }
}
