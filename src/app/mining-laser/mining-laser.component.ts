import { MiningLaserModel } from './../models/mining-laser-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mining-laser',
  templateUrl: './mining-laser.component.html',
  styleUrls: ['./mining-laser.component.scss']
})
export class MiningLaserComponent implements OnInit {
  @Input() public miningLaser: MiningLaserModel;
  @Input() public isDetails: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
