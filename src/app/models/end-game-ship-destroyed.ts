import { EndGameResult } from './interfaces/end-game-result';

export class EndGameShipDestroyed implements EndGameResult {
  getEndGameText(): string {
    return 'Game over, your ship has been destroyed.';
  }
}
