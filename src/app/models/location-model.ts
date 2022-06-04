import { LocationStatus } from './enums/location-status';
import { VendorModel } from './vendor-model';
import { ContainerModel } from './container-model';
import { Hostility } from './hostility-model';

export interface LocationModel {
  level: number;
  name: string;
  isMineable: boolean;
  canTrade: boolean;
  locationSize: number;
  currentPosition: number;
  availableResources: number;
  hostileHitpoints: number;
  hostileDamage: number;
  mining: ContainerModel;
  hostility: Hostility;
  locationStatus: LocationStatus;
  vendorModel: VendorModel;
}
