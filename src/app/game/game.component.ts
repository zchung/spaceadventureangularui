import { Component, OnInit, Input } from '@angular/core';
import { GameModel } from '../models/game-model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() public game: GameModel;
  constructor() { }

  ngOnInit(): void {
  }

}
