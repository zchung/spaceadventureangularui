import { Injectable } from '@angular/core';
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
  private gameApiUrl: string
  constructor(private baseHttpService: HttpBaseService) {
    this.gameApiUrl = environment.gameApiUrlBase + "/api/game/";
  }

  public getNewGame(shipName: string): Observable<GameModel> {
    return this.baseHttpService.postOverride<GameModel>(this.gameApiUrl +  'getnewgame',
      { ShipName : shipName });
  }

  public executeGameTurn(executeGameTurnRequest: ExecuteGameTurnRequest): Observable<Result<GameTurnResponse>> {
    return this.baseHttpService.postOverride<Result<GameTurnResponse>>(this.gameApiUrl + 'executeGameTurn', executeGameTurnRequest);
  }

  public getHealthCheck() : Observable<any> {
    return this.baseHttpService.getOverride<any>(environment.gameApiUrlBase + "/health", { responseType: 'text'});
  }
}
