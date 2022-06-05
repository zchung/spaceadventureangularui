import { Damageable } from './damageable';
import { PoweredEquipment } from './powered-equipment';

export interface ShieldsModel extends Damageable, PoweredEquipment {
  regenAmount: number;
}
