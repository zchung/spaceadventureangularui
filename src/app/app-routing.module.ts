import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGameComponent } from './main-game/main-game.component';

const routes: Routes = [
  { path: 'main-game', component: MainGameComponent },
  { path: '**', component: MainGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
