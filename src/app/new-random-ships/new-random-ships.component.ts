import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { ResultType } from '../models/enums/result-type';
import { Result } from '../models/result';
import { ShipModel } from '../models/ship-model';
import { GameHttpService } from '../services/game-http-service';
import { GameModel } from '../models/game-model';
import { GameDataService } from '../services/game-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-random-ships',
  templateUrl: './new-random-ships.component.html',
  styleUrls: ['./new-random-ships.component.scss']
})
export class NewRandomShipsComponent implements OnInit {
  public loading: boolean = false;
  public ships: Array<ShipModel> = [];
  constructor(private gameHttpService: GameHttpService, private gameDataService: GameDataService,
              private router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.gameHttpService.getNewRandomShips(3)
    .pipe(finalize(() => {
      this.loading = false;
    }))
    .subscribe((listOfShipsResult: Result<Array<ShipModel>>) => {
      if (listOfShipsResult.resultType === ResultType.Success) {
        this.ships = listOfShipsResult.data;
      } else {
        alert(JSON.stringify(listOfShipsResult.messages));
      }
    })
  }

  public onShipSelected(ship: ShipModel): void {
    this.loading = true;
    this.gameHttpService.executeNewGame(ship)
    .pipe(finalize(() => {
      this.loading = false;
    }))
    .subscribe((game: GameModel) => {
      this.gameDataService.game = game;
      this.router.navigateByUrl('/main-game');
    });
  }

}
