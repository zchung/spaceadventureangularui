import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGameComponent } from './main-game/main-game.component';
import { NewGameComponent } from './new-game/new-game.component';
import { NewRandomShipsComponent } from './new-random-ships/new-random-ships.component';

const routes: Routes = [
  { path: 'new-game', component: NewGameComponent },
  { path: 'new-random-ships', component: NewRandomShipsComponent },
  { path: 'main-game', component: MainGameComponent },
  { path: '**', component: NewGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
