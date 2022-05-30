import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {ModalService} from "../service/modal.service";

@Component({
  selector: 'sand-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  display: boolean = false;
  unsub: Subject<boolean> = new Subject<boolean>();

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.display.pipe(takeUntil(this.unsub)).subscribe(event => {
      alert('not closed');
      this.display = event;
    })
  }

  ngOnDestroy(): void {
    this.unsub.next(true);
  }

}
