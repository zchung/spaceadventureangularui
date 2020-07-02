import { Damageable } from './damageable';
import { ShieldsModel } from './shields-model';
import { WeaponModel } from './weapon-model';
import { EnginesModel } from './engines-model';
import { ContainerModel } from './container-model';

export interface ShipModel extends Damageable {
  name: string;
  shields: ShieldsModel;
  weapon: WeaponModel;
  engines: EnginesModel;
  powerContainer: ContainerModel;
  cargoContainer: ContainerModel;
}
