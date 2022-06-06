import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpBaseService } from '../services/http-base.service';
import { GameHttpService } from '../services/game-http-service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }


}
