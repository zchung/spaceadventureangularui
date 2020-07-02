import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GameModel } from '../models/game-model';
import { Observable } from 'rxjs';
import { ExecuteGameTurnRequest } from '../models/requests/execute-game-turn';
import { GameTurnResponse } from '../models/responses/game-turn-response';
import { Result } from '../models/result';
import { environment } from '../../environments/environment';
import { HttpBaseService } from './http-base.service';

@Injectable()
export class GameService {
  /**
   *
   */

  constructor(private baseHttpService: HttpBaseService) {
  }

  public getNewGame(shipName: string): Observable<GameModel> {
    return this.baseHttpService.postOverride<GameModel>(environment.gameApiUrl +  'getnewgame',
      { ShipName : shipName });
  }

  public executeGameTurn(executeGameTurnRequest: ExecuteGameTurnRequest): Observable<Result<GameTurnResponse>> {
    return this.baseHttpService.postOverride<Result<GameTurnResponse>>(environment.gameApiUrl + 'executeGameTurn', executeGameTurnRequest);
  }
}
