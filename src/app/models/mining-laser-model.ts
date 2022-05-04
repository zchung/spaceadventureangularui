import { ToolType } from './enums/tool-type';
import { PoweredEquipment } from './powered-equipment';
export interface MiningLaserModel extends PoweredEquipment {
  baseEffectiveness : number;
  toolType: ToolType;
}
