import { Component, OnInit, Input } from '@angular/core';
import { LocationStatus } from '../models/enums/location-status';
import { LocationModel } from '../models/location-model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @Input() public location: LocationModel;
  public LocationStatus: any = LocationStatus;
  constructor() { }

  ngOnInit(): void {
  }

}
