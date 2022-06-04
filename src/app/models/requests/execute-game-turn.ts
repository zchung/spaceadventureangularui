import { TurnAction } from '../enums/turn-action';
import { GameModel } from '../game-model';
import { ShipSettingsValue } from './ship-settings-value';

export interface ExecuteGameTurnRequest {
  GameId: string;
  TurnAction: TurnAction;
  ShipSettings: Array<ShipSettingsValue>;
}
