import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpBaseService } from './http-base.service';
import { Observable } from 'rxjs';
import { GameHighScoreModel } from '../models/game-high-score-model';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class GameHighScoresService {
  private gameHighScoresApiUrl: string
  constructor(private baseHttpService: HttpBaseService) {
    this.gameHighScoresApiUrl = environment.gameApiUrlBase + "/api/gamehighscore/";
  }

  public getHighScores(): Observable<Result<Array<GameHighScoreModel>>> {
    return this.baseHttpService.getOverride<Result<Array<GameHighScoreModel>>>(this.gameHighScoresApiUrl);
  }
}
