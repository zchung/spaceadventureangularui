import { ShipModel } from "./ship-model";

export interface GameOptionsModel {
  id: string;
  ships: Array<ShipModel>;
}
