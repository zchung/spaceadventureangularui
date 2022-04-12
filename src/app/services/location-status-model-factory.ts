import { Injectable } from '@angular/core';
import { LocationStatus } from '../models/enums/location-status';
import { TurnAction } from '../models/enums/turn-action';
import { LocationStatusModel } from '../models/interfaces/location-status-model';
import { FriendlyLocationStatus } from '../models/friendly-location-status';
import { NeutralLocationStatus } from '../models/neutral-location-status';
import { HostileLocationStatus } from '../models/hostile-location-status';
import { EmptyLocationStatus } from '../models/empty-location-status';

@Injectable()
export class LocationStatusModelFactory {
  public getLocationStatusModelFactory(locationStatus: LocationStatus, resourcesAvailable: number): LocationStatusModel {
    const baseTurnActions: Array<TurnAction> = new Array<TurnAction>();
    baseTurnActions.push(TurnAction.Travel);
    let locationStatusModel: LocationStatusModel = new EmptyLocationStatus(baseTurnActions);
    switch (locationStatus) {
      case LocationStatus.Friendly:
        locationStatusModel = new FriendlyLocationStatus(baseTurnActions);
        break;
      case LocationStatus.Neutral:
        locationStatusModel = new NeutralLocationStatus(baseTurnActions, resourcesAvailable);
        break;
      case LocationStatus.Hostile:
        locationStatusModel = new HostileLocationStatus(baseTurnActions);
        break;
      default:
        break;
    }
    return locationStatusModel;
  }
}
