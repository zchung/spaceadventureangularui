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
import { Router } from '@angular/router';

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
      private router: Router) { }

  ngOnInit(): void {
    this.game = this.gameDataService.game;
  }

  public engage(): void {
    this.loading = true;
    this.gameHttpService.executeGameTurn({ TurnAction: this.selectedTurnAction, GameModel: this.game })
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

}
