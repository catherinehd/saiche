import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FadeInOutAnimation } from '../animations/fade-in-out.animation';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.styl'],
  animations: [FadeInOutAnimation]
})
export class ModalComponent implements OnInit {
  @Input() modal: Modal;
  @Output() onConfirm = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  confirm(status) {
    this.onConfirm.emit(status)
  }

}

class Modal {
  constructor(public isConfirmModalShow?: boolean, public confirmMsg?: string) { }
}
