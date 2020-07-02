import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule, NgbModalModule, NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MainGameComponent } from './main-game/main-game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import { ShipComponent } from './ship/ship.component';
import { ShieldsComponent } from './shields/shields.component';
import { WeaponComponent } from './weapon/weapon.component';
import { EnginesComponent } from './engines/engines.component';
import { PowerLevelComponent } from './power-level/power-level.component';
import { LocationComponent } from './location/location.component';
import { GameService } from './services/game-service';
import { GameComponent } from './game/game.component';
import { LocationStatusModelFactory } from './services/location-status-model-factory';
import { TurnActionToTextPipe } from './pipes/turn-action-to-text.pipe';
import { VendorComponent } from './vendor/vendor.component';
import { MultiMessagePopupComponent } from './multi-message-popup/multi-message-popup.component';
import { MessageTypeToImagePipe } from './pipes/message-type-to-img.pipe';
import { HttpErrorInterceptor } from './interceptors/http-error-interceptor';
import { HttpBaseService } from './services/http-base.service';
import { MainHeaderComponent } from './main-header/main-header.component';

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
    MessageTypeToImagePipe,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModalModule,
    NgbNavModule,
    MatProgressSpinnerModule,
    MatSliderModule
  ],
  entryComponents: [
    MultiMessagePopupComponent
  ],
  providers: [
    GameService,
    LocationStatusModelFactory,
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
