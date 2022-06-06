import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { GameHttpService } from '../services/game-http-service';
import { HttpBaseService } from '../services/http-base.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  public newGameBtnEnabled: boolean = false;
  public authKey: string = "";
  public loading: boolean = false;
  constructor(private httpBaseService: HttpBaseService, private gameService: GameHttpService) { }

  ngOnInit(): void {
    let apiKey = window.localStorage.getItem(HttpBaseService.apiKeyName);
    if (apiKey) {
      this.authKey = apiKey;
      this.setAuthKey();
    }
  }


  public setAuthKey(): void {
    if (this.authKey) {
      window.localStorage.setItem(HttpBaseService.apiKeyName, this.authKey);
      this.httpBaseService.AddAuthorisationHeader(this.authKey);
      this.loading = true;
      this.gameService.getHealthCheck()
      .pipe(finalize(() => {
        this.loading = false;
      }))
      .subscribe((result: any) => {
        if (result === "Healthy") {
          this.newGameBtnEnabled = true;
        }
      })
    } else {
      alert("no key")
    }
  }
}
