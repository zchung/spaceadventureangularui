import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpBaseService } from '../services/http-base.service';
import { GameHttpService } from '../services/game-http-service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  public authKey: string = "";
  public loading: boolean = false;
  @Input()
  public showAuthKey = true;
  @Output()
  public onNewGameEnabled : EventEmitter<string> = new EventEmitter<string>();
  constructor(private httpBaseService: HttpBaseService, private gameService: GameHttpService) { }

  ngOnInit(): void {
  }

  public setAuthKey(): void {
    this.httpBaseService.AddAuthorisationHeader(this.authKey);
    this.loading = true;
    this.gameService.getHealthCheck()
    .pipe(finalize(() => {
      this.loading = false;
    }))
    .subscribe((result: any) => {
        this.onNewGameEnabled.emit(result);
    })
  }
}
