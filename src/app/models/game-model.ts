import { ShipModel } from './ship-model';
import { LocationModel } from './location-model';

export interface GameModel {
  id: string;
  active: boolean;
  dateCreated: Date;
  version: string;
  credits: number;
  turnCount: number;
  shipModel: ShipModel;
  locationModel: LocationModel;
}
