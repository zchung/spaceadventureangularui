import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpBaseService } from '../services/http-base.service';
import { GameService } from '../services/game-service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  public authKey: string = "";
  public loading: boolean = false
  @Output()
  public onNewGameEnabled : EventEmitter<string> = new EventEmitter<string>();
  constructor(private httpBaseService: HttpBaseService, private gameService: GameService) { }

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
