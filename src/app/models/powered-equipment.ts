import { Equipment } from "./equipment-model";

export interface PoweredEquipment extends Equipment {
  powerLevel: number;
  minPowerUsage: number;
  maxPowerSetting: number;
}
