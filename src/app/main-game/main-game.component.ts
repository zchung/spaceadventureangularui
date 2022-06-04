import { Component, OnInit } from '@angular/core';
import { GameModel } from '../models/game-model';
import { GameHttpService } from '../services/game-http-service';
import { GameDataService } from '../services/game-data.service';
import { TurnAction } from '../models/enums/turn-action';
import { GameTurnResponse } from '../models/responses/game-turn-response';
import { Result } from '../models/result';
import { ResultType } from '../models/enums/result-type';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MultiMessagePopupComponent } from '../multi-message-popup/multi-message-popup.component';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ExecuteGameTurnRequest } from '../models/requests/execute-game-turn';
import { ShipSettingsValue } from '../models/requests/ship-settings-value';
import { ShipItem } from '../models/enums/ship-item';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss']
})
export class MainGameComponent implements OnInit {
  public loading = false;
  public shipName: string = '';
  public game: GameModel | null = null;
  public availableTurnActions: Array<TurnAction> = new Array<TurnAction>();
  public selectedTurnAction: TurnAction = TurnAction.Travel;
  constructor(private gameHttpService: GameHttpService, private gameDataService: GameDataService, private modalService: NgbModal,
      private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.game = this.gameDataService.game;
    if (!this.game) {
      var gameId = this.activatedRoute.snapshot.paramMap.get("id");
      if (gameId) {
        this.loading = true;
        this.gameHttpService.getGame(gameId)
        .pipe(finalize(() => {
          this.loading = false;
        })).subscribe((gameResult: Result<GameModel>) => {
          if (gameResult.resultType == ResultType.Success) {
            this.game = gameResult.data;
          } else {
            alert(JSON.stringify(gameResult.messages));
          }
        })
      } else {
        alert("empty game Id");
      }
    }
  }

  public engage(): void {
    this.loading = true;
    var shipSetting = this.GetShipSettings();
    this.gameHttpService.executeGameTurn({ GameId: this.game?.id ?? "", TurnAction: this.selectedTurnAction, ShipSettings: shipSetting })
    .pipe(finalize(() => {
      this.loading = false;
    }))
    .subscribe((gameResponseResult: Result<GameTurnResponse>) => {
      if (gameResponseResult.resultType === ResultType.Success) {
        this.game = gameResponseResult.data.gameModel;
        if (gameResponseResult.data.shipStillAlive && gameResponseResult.data.stillHasPower) {
          this.availableTurnActions = gameResponseResult.data.availableActions;
          if (!this.availableTurnActions.includes(this.selectedTurnAction)) {
            this.selectedTurnAction = this.availableTurnActions[0];
          }

        } else {
          this.game = null;
          this.gameDataService.game = null;
          this.router.navigateByUrl('/new-game');
          // high scores go here.
        }

        const modal: NgbModalRef = this.modalService.open(MultiMessagePopupComponent);
        const multiMessagePopupComponent: MultiMessagePopupComponent =  modal.componentInstance;
        multiMessagePopupComponent.messages = gameResponseResult.data.messages;

      } else {
        let message = '';
        gameResponseResult.messages.forEach((messageText: string) => {
          message += `${messageText}`;
        });
        alert(message);
      }
    });
  }

  private GetShipSettings(): Array<ShipSettingsValue> {
    return [
      new ShipSettingsValue(this.game?.shipModel.shields.powerLevel ?? 0, ShipItem.Shields),
      new ShipSettingsValue(this.game?.shipModel.weapon.powerLevel ?? 0, ShipItem.Weapon),
      new ShipSettingsValue(this.game?.shipModel.miningLaser.powerLevel ?? 0, ShipItem.MiningLaser),
      new ShipSettingsValue(this.game?.shipModel.engines.powerLevel ?? 0, ShipItem.Engines)
    ]
  }

}
