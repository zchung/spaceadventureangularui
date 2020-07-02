import { EndGameNoPower } from './../models/end-game-no-power';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameModel } from '../models/game-model';
import { GameService } from '../services/game-service';
import { TurnAction } from '../models/enums/turn-action';
import { GameTurnResponse } from '../models/responses/game-turn-response';
import { MessageModel } from '../models/message-model';
import { Result } from '../models/result';
import { ResultType } from '../models/enums/result-type';
import { LocationStatus } from '../models/enums/location-status';
import { LocationStatusModelFactory } from '../services/location-status-model-factory';
import { LocationStatusModel } from '../models/interfaces/location-status-model';
import { EndGameResult } from '../models/interfaces/end-game-result';
import { EndGameShipDestroyed } from '../models/end-game-ship-destroyed';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MultiMessagePopupComponent } from '../multi-message-popup/multi-message-popup.component';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss']
})
export class MainGameComponent implements OnInit {
  public loading = false;
  public shipName: string;
  public game: GameModel;
  public availableTurnActions: Array<TurnAction> = new Array<TurnAction>();
  public selectedTurnAction: TurnAction = TurnAction.Travel;
  constructor(private gameService: GameService, private locationStatusModelFactory: LocationStatusModelFactory,
              private modalService: NgbModal) { }

  ngOnInit(): void {

  }


  public createNewGame(): void {
    this.loading = true;
    this.gameService.getNewGame(this.shipName)
    .pipe(finalize(() => {
      this.loading = false;
    }))
    .subscribe((game: GameModel) => {
        this.game = game;
        this.loading = false;
    });
  }

  public endTurn(): void {
    this.loading = true;
    this.gameService.executeGameTurn({ TurnAction: this.selectedTurnAction, GameModel: this.game })
    .pipe(finalize(() => {
      this.loading = false;
    }))
    .subscribe((gameResponseResult: Result<GameTurnResponse>) => {
      if (gameResponseResult.resultType === ResultType.Success) {
        this.game = gameResponseResult.data.gameModel;
        if (gameResponseResult.data.shipStillAlive && gameResponseResult.data.stillHasPower) {
          this.availableTurnActions = this.getAvailableTurnActions(this.game.locationModel.locationStatus,
            this.game.locationModel.availableResources);
          if (!this.availableTurnActions.includes(this.selectedTurnAction)) {
            this.selectedTurnAction = this.availableTurnActions[0];
          }

        } else {
          // put game over logic here.
          let gameOverMessage: string = null;
          let endGameResult: EndGameResult = null;
          if (!gameResponseResult.data.shipStillAlive) {
            endGameResult = new EndGameShipDestroyed();
          } else if (!gameResponseResult.data.stillHasPower) {
            endGameResult = new EndGameNoPower();
          }
          gameOverMessage = endGameResult.getEndGameText() +
          ` Turns: ${gameResponseResult.data.gameModel.turnCount} Credits: ${gameResponseResult.data.gameModel.credits}`;
          alert(gameOverMessage);
          this.game = null;
          return;
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

  private getAvailableTurnActions(locationStatus: LocationStatus, resourcesAvailable: number): Array<TurnAction> {
    const locationStatusModel: LocationStatusModel = this.locationStatusModelFactory
                                                          .getLocationStatusModelFactory(locationStatus, resourcesAvailable);
    return locationStatusModel.getDropdownOptions();
  }

}
