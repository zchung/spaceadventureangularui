import { Injectable } from '@angular/core';
import { GameModel } from '../models/game-model';
import { Observable } from 'rxjs';
import { ExecuteGameTurnRequest } from '../models/requests/execute-game-turn';
import { GameTurnResponse } from '../models/responses/game-turn-response';
import { Result } from '../models/result';
import { environment } from '../../environments/environment';
import { HttpBaseService } from './http-base.service';
import { ShipModel } from '../models/ship-model';

@Injectable()
export class GameHttpService {
  /**
   *
   */
  private gameApiUrl: string
  constructor(private baseHttpService: HttpBaseService) {
    this.gameApiUrl = environment.gameApiUrlBase + "/api/game/";
  }

  public executeNewGame(ship: ShipModel): Observable<GameModel> {
    return this.baseHttpService.postOverride<GameModel>(this.gameApiUrl +  'execute/new',
      { ShipModel : ship });
  }

  public getNewRandomShips(countOfShips: number): Observable<Result<Array<ShipModel>>> {
    return this.baseHttpService.getOverride<Result<Array<ShipModel>>>(this.gameApiUrl + `ship/new/random/${countOfShips}`);
  }

  public executeGameTurn(executeGameTurnRequest: ExecuteGameTurnRequest): Observable<Result<GameTurnResponse>> {
    return this.baseHttpService.postOverride<Result<GameTurnResponse>>(this.gameApiUrl + 'executeGameTurn', executeGameTurnRequest);
  }

  public getHealthCheck() : Observable<any> {
    return this.baseHttpService.getOverride<any>(environment.gameApiUrlBase + "/health", { responseType: 'text'});
  }
}
