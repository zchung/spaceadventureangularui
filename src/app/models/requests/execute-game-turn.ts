import { TurnAction } from '../enums/turn-action';
import { GameModel } from '../game-model';

export interface ExecuteGameTurnRequest {
  TurnAction: TurnAction;
  GameModel: GameModel;
}
