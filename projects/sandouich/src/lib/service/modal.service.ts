import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  display = new BehaviorSubject(false);
  status = false;

  constructor() { }

  enable(): void {
    this.status = true;
    this.display.next(this.status);
  }

  disable(): void {
    this.status = false;
    this.display.next(this.status);
  }

  check(): boolean {
    this.status = !this.status;
    this.display.next(this.status);
    return this.status;
  }
}
