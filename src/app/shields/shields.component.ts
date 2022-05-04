import { Component, OnInit, Input } from '@angular/core';
import { ShieldsModel } from '../models/shields-model';

@Component({
  selector: 'app-shields',
  templateUrl: './shields.component.html',
  styleUrls: ['./shields.component.scss']
})
export class ShieldsComponent implements OnInit {
  @Input() public shields: ShieldsModel;
  @Input() public isDetails: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
