import { Damageable } from './damageable';
export interface Hostility extends Damageable {
  damage: number;
  aggressionName: string;
}
