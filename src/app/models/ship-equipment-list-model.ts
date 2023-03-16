import { EnginesModel } from './engines-model';
import { MiningLaserModel } from './mining-laser-model';
import { ShieldsModel } from './shields-model';
import { WeaponModel } from './weapon-model';

export interface ShipEquipmentList {
  shields: Array<ShieldsModel>;
  weapons: Array<WeaponModel>;
  miningLasers: Array<MiningLaserModel>;
  engines: Array<EnginesModel>;
}
