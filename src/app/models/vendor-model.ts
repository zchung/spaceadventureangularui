import { ShipEquipmentList } from './ship-equipment-list-model';
export interface VendorModel {
  resourcesTradeRate: number;
  powerRechargeRate: number;
  resourcesToTrade: number;
  powerToTrade: number;
  repairsToTrade: number;
  repairRate: number;
  shipEquipment: ShipEquipmentList;
}
