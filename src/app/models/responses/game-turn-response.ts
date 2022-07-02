import { TradeAction } from '../enums/trade-action';
import { TurnAction } from '../enums/turn-action';
import { GameModel } from '../game-model';
import { MessageModel } from '../message-model';
export interface GameTurnResponse {
  gameModel: GameModel;
  stillHadDistanceRemaining: boolean;
  stillHasPower: boolean;
  shipStillAlive: boolean;
  messages: Array<MessageModel>;
  availableActions: Array<TurnAction>;
  tradeActions: Array<TradeAction>;
}
