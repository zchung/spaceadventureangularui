import { Injectable } from '@angular/core';
import { GameModel } from '../models/game-model';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  public game: GameModel | null = null;
  constructor() { }
}
