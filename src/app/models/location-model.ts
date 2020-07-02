import { LocationStatus } from './enums/location-status';
import { VendorModel } from './vendor-model';

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
  locationStatus: LocationStatus;
  vendorModel: VendorModel;
}
