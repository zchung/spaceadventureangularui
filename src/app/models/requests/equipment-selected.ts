import { ToolType } from '../enums/tool-type';
export class EquipmentSelected {
  /**
   *
   */
  constructor(
    public selectedId: string, public toolType: ToolType) {
  }
}
