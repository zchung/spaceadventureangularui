import { TurnAction } from '../enums/turn-action';
import { ShipSettingsValue } from './ship-settings-value';
import { TradeAction } from '../enums/trade-action';
import { EquipmentSelected } from './equipment-selected';

export interface ExecuteGameTurnRequest {
  GameId: string;
  TurnAction: TurnAction;
  TradeAction?: TradeAction;
  ShipSettings: Array<ShipSettingsValue>;
  SelectedEquipment: EquipmentSelected | null;
}
