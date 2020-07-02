import { Component, OnInit, Input } from '@angular/core';
import { MessageModel } from '../models/message-model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-multi-message-popup',
  templateUrl: './multi-message-popup.component.html',
  styleUrls: ['./multi-message-popup.component.scss']
})
export class MultiMessagePopupComponent implements OnInit {
  @Input()public messages: Array<MessageModel>;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {

  }

}
