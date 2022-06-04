import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { ResultType } from '../models/enums/result-type';
import { GameOptionsModel } from '../models/game-options-model';
import { Result } from '../models/result';
import { ShipModel } from '../models/ship-model';
import { GameOptionsHttpService } from '../services/game-options-http-service';

@Component({
  selector: 'app-game-options',
  templateUrl: './game-options.component.html',
  styleUrls: ['./game-options.component.scss']
})
export class GameOptionsComponent implements OnInit {
  public loading: boolean = false;
  public gameOptions: GameOptionsModel;
  constructor(private gameOptionsHttpService: GameOptionsHttpService) { }

  ngOnInit(): void {
    this.loading = true;
    this.gameOptionsHttpService.getGameOptions(3)
    .pipe(finalize(() => {
      this.loading = false;
    }))
    .subscribe((getGameOptionsResult: Result<GameOptionsModel>) => {
      if (getGameOptionsResult.resultType === ResultType.Success) {
        this.gameOptions = getGameOptionsResult.data;
      } else {
        alert(JSON.stringify(getGameOptionsResult.messages));
      }
    })
  }

}
