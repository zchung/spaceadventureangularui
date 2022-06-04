import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGameComponent } from './main-game/main-game.component';
import { NewGameComponent } from './new-game/new-game.component';
import { GameOptionsComponent } from './game-options/game-options.component';

const routes: Routes = [
  { path: 'new-game', component: NewGameComponent },
  { path: 'game-options', component: GameOptionsComponent },
  { path: 'main-game/:id', component: MainGameComponent },
  { path: '**', component: NewGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
