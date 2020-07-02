import { Component, OnInit, Input } from '@angular/core';
import { VendorModel } from '../models/vendor-model';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
@Input() public vendor: VendorModel;
  constructor() { }

  ngOnInit(): void {
  }

}
