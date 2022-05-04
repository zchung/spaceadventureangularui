import { Component, OnInit, Input } from '@angular/core';
import { WeaponModel } from '../models/weapon-model';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss']
})
export class WeaponComponent implements OnInit {
  @Input() public weapon: WeaponModel;
  @Input() public isDetails: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
