import { environment } from '../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpBaseService } from "./http-base.service";
import { GameOptionsModel } from '../models/game-options-model';
import { Result } from '../models/result';
import { Observable } from 'rxjs';


@Injectable()
export class GameOptionsHttpService {
  private gameOptionsApiUrl: string;
  constructor(private baseHttpService: HttpBaseService) {
    this.gameOptionsApiUrl = environment.gameApiUrlBase + "/api/gameoptions/";
  }

  public getGameOptions(countOfShips: number): Observable<Result<GameOptionsModel>> {
    return this.baseHttpService.getOverride<Result<GameOptionsModel>>(this.gameOptionsApiUrl + `new/random/ships/${countOfShips}`);
  }
}
