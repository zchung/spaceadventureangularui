import { Damageable } from './damageable';
import { ShieldsModel } from './shields-model';
import { WeaponModel } from './weapon-model';
import { EnginesModel } from './engines-model';
import { ContainerModel } from './container-model';
import { MiningLaserModel } from './mining-laser-model';

export interface ShipModel extends Damageable {
  id: string
  name: string;
  shields: ShieldsModel;
  weapon: WeaponModel;
  miningLaser: MiningLaserModel;
  engines: EnginesModel;
  powerContainer: ContainerModel;
  cargoContainer: ContainerModel;
  cost: number;
}
