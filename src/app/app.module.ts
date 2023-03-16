import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModalModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnginesComponent } from './engines/engines.component';
import { GameComponent } from './game/game.component';
import { LocationComponent } from './location/location.component';
import { MainGameComponent } from './main-game/main-game.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MultiMessagePopupComponent } from './multi-message-popup/multi-message-popup.component';
import { TurnActionToTextPipe } from './pipes/turn-action-to-text.pipe';
import { PowerLevelComponent } from './power-level/power-level.component';
import { ShieldsComponent } from './shields/shields.component';
import { ShipComponent } from './ship/ship.component';
import { VendorComponent } from './vendor/vendor.component';
import { WeaponComponent } from './weapon/weapon.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorInterceptor } from './interceptors/http-error-interceptor';
import { GameHttpService } from './services/game-http-service';
import { HttpBaseService } from './services/http-base.service';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { NewRandomShipsComponent } from './new-random-ships/new-random-ships.component';
import { MiningLaserComponent } from './mining-laser/mining-laser.component';
import { NewGameComponent } from './new-game/new-game.component';
import { GameOptionsComponent } from './game-options/game-options.component';
import { GameOptionsHttpService } from './services/game-options-http-service';
import { TradeActionToTextPipe } from './pipes/trade-action-to-text.pipe';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { GameHighScoresComponent } from './game-high-scores/game-high-scores.component';
import { MainGameTabsComponent } from './main-game-tabs/main-game-tabs.component';
import { MainGameTurnActionsComponent } from './main-game-turn-actions/main-game-turn-actions.component';
import { MainGameVendorShipEquipmentListComponent } from './main-game-vendor-ship-equipment-list/main-game-vendor-ship-equipment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainGameComponent,
    ShipComponent,
    ShieldsComponent,
    WeaponComponent,
    EnginesComponent,
    PowerLevelComponent,
    LocationComponent,
    GameComponent,
    TurnActionToTextPipe,
    VendorComponent,
    MultiMessagePopupComponent,
    MainHeaderComponent,
    NewRandomShipsComponent,
    MiningLaserComponent,
    NewGameComponent,
    GameOptionsComponent,
    TradeActionToTextPipe,
    GameHighScoresComponent,
    MainGameTabsComponent,
    MainGameTurnActionsComponent,
    MainGameVendorShipEquipmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbNavModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatRadioModule,
    MatButtonToggleModule
  ],
  entryComponents: [
    MultiMessagePopupComponent
  ],
  providers: [
    GameHttpService,
    GameOptionsHttpService,
    HttpBaseService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
