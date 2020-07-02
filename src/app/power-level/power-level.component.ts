import { Component, OnInit, Input } from '@angular/core';
import { PoweredEquipment } from '../models/powered-equipment';

@Component({
  selector: 'app-power-level',
  templateUrl: './power-level.component.html',
  styleUrls: ['./power-level.component.scss']
})
export class PowerLevelComponent implements OnInit {
  @Input() public equipmentName: string;
  @Input() public poweredEquipment: PoweredEquipment;
  @Input() public min = 0;
  @Input() public max = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
