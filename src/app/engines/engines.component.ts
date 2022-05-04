import { Component, OnInit, Input } from '@angular/core';
import { EnginesModel } from '../models/engines-model';

@Component({
  selector: 'app-engines',
  templateUrl: './engines.component.html',
  styleUrls: ['./engines.component.scss']
})
export class EnginesComponent implements OnInit {
  @Input() public engines: EnginesModel;
  @Input() public isDetails: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
