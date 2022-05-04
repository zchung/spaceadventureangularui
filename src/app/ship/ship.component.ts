import { Component, OnInit, Input } from '@angular/core';
import { ShipModel } from '../models/ship-model';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {
  @Input() public ship: ShipModel;
  @Input() public isDetails: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
