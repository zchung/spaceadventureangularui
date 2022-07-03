import { TurnAction } from '../enums/turn-action';
import { GameModel } from '../game-model';
import { ShipSettingsValue } from './ship-settings-value';
import { TradeAction } from '../enums/trade-action';

export interface ExecuteGameTurnRequest {
  GameId: string;
  TurnAction: TurnAction;
  TradeAction?: TradeAction;
  ShipSettings: Array<ShipSettingsValue>;
}
