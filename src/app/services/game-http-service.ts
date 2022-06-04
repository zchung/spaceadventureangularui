import { Injectable } from '@angular/core';
import { GameModel } from '../models/game-model';
import { Observable } from 'rxjs';
import { ExecuteGameTurnRequest } from '../models/requests/execute-game-turn';
import { GameTurnResponse } from '../models/responses/game-turn-response';
import { Result } from '../models/result';
import { environment } from '../../environments/environment';
import { HttpBaseService } from './http-base.service';
import { ShipModel } from '../models/ship-model';
import { ExecuteNewGameRequest } from '../models/requests/execute-new-game';

@Injectable()
export class GameHttpService {
  /**
   *
   */
  private gameApiUrl: string
  constructor(private baseHttpService: HttpBaseService) {
    this.gameApiUrl = environment.gameApiUrlBase + "/api/game/";
  }

  public executeNewGame(executeNewGameRequest: ExecuteNewGameRequest): Observable<Result<GameModel>> {
    return this.baseHttpService.postOverride<Result<GameModel>>(this.gameApiUrl +  `execute/new/gameoptions/${executeNewGameRequest.gameOptionsId}/ship/${executeNewGameRequest.shipId}`,
      { });
  }

  public executeGameTurn(executeGameTurnRequest: ExecuteGameTurnRequest): Observable<Result<GameTurnResponse>> {
    return this.baseHttpService.postOverride<Result<GameTurnResponse>>(this.gameApiUrl + 'execute/turn', executeGameTurnRequest);
  }

  public getGame(gameId: string): Observable<Result<GameModel>> {
    return this.baseHttpService.getOverride<Result<GameModel>>(this.gameApiUrl + `${gameId}`);
  }

  public getHealthCheck() : Observable<any> {
    return this.baseHttpService.getOverride<any>(environment.gameApiUrlBase + "/health", { responseType: 'text'});
  }
}
