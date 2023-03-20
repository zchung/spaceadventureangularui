import { Component, Input, OnInit } from '@angular/core';
import { GameModel } from '../models/game-model';

@Component({
  selector: 'app-main-game-tabs',
  templateUrl: './main-game-tabs.component.html',
  styleUrls: ['./main-game-tabs.component.scss']
})
export class MainGameTabsComponent implements OnInit {
  @Input() public game: GameModel
  constructor() { }

  ngOnInit(): void {
  }

}
