import { GameModel } from '../game-model';
import { MessageModel } from '../message-model';
export interface GameTurnResponse {
  gameModel: GameModel;
  stillHadDistanceRemaining: boolean;
  stillHasPower: boolean;
  shipStillAlive: boolean;
  messages: Array<MessageModel>;
}
