import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { ShipModel } from '../models/ship-model';
import { GameHttpService } from '../services/game-http-service';
import { GameModel } from '../models/game-model';
import { GameDataService } from '../services/game-data.service';
import { Router } from '@angular/router';
import { GameOptionsModel } from '../models/game-options-model';
import { Result } from '../models/result';
import { ResultType } from '../models/enums/result-type';
import { ExecuteNewGameRequest } from '../models/requests/execute-new-game';

@Component({
  selector: 'app-new-random-ships',
  templateUrl: './new-random-ships.component.html',
  styleUrls: ['./new-random-ships.component.scss']
})
export class NewRandomShipsComponent implements OnInit {
  public loading: boolean = false;
  @Input() public gameOptionsId: string = "";
  @Input() public ships: Array<ShipModel> = [];
  constructor(private gameHttpService: GameHttpService, private gameDataService: GameDataService,
              private router: Router) { }

  ngOnInit(): void {

  }

  public onShipSelected(ship: ShipModel): void {
    this.loading = true;
    this.gameHttpService.executeNewGame(new ExecuteNewGameRequest(this.gameOptionsId, ship.id))
    .pipe(finalize(() => {
      this.loading = false;
    }))
    .subscribe((gameResult: Result<GameModel>) => {
      if (gameResult.resultType != ResultType.Success) {
        alert(JSON.stringify(gameResult.messages))
        return;
      }
      this.gameDataService.game = gameResult.data;
      this.router.navigateByUrl(`/main-game/${gameResult.data.id}`);
    });
  }

}
