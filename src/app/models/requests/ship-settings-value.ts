import { ShipItem } from "../enums/ship-item";

export class ShipSettingsValue {
  constructor(public PowerLevel: number, public ShipItem: ShipItem) {}
}
