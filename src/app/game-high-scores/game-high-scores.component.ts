import { Component, OnInit } from '@angular/core';
import { GameHighScoreModel } from '../models/game-high-score-model';
import { Result } from '../models/result';
import { GameHighScoresService } from '../services/game-high-scores.service';
import { finalize } from 'rxjs/operators';
import { ResultType } from '../models/enums/result-type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-high-scores',
  templateUrl: './game-high-scores.component.html',
  styleUrls: ['./game-high-scores.component.scss']
})
export class GameHighScoresComponent implements OnInit {
  public highScoreList: Array<GameHighScoreModel>;
  public loading: boolean = false;
  public newHighScoreIndex: number | null = null;
  constructor(private gameHighScoreService: GameHighScoresService, private activatedRoute: ActivatedRoute) {
    this.highScoreList = [];
  }

  ngOnInit(): void {
    this.loading = true;
    var indexString = this.activatedRoute.snapshot.paramMap.get("index");
    if (indexString != null && indexString != undefined) {
      this.newHighScoreIndex = Number(this.activatedRoute.snapshot.paramMap.get("index"));
    }
    this.gameHighScoreService.getHighScores()
    .pipe(finalize(() => {
      this.loading = false;
    }))
    .subscribe((gameHighScoreResult: Result<Array<GameHighScoreModel>>) => {
      if (gameHighScoreResult.resultType === ResultType.Success) {
        this.highScoreList = gameHighScoreResult.data;
      }
    });
  }
}
