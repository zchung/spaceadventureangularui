import { EndGameResult } from './interfaces/end-game-result';

export class EndGameNoPower implements EndGameResult {
  getEndGameText(): string {
    return 'Game over, your ship has run out of power';
  }
}

