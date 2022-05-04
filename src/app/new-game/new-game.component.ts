import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  public newGameBtnEnabled: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public onNewGameEnabled(status: any) : void {
    if (status === "Healthy") {
      this.newGameBtnEnabled = true;
    }
  }
}
