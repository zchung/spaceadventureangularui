import { Component, OnInit } from '@angular/core';
import { HttpBaseService } from '../services/http-base.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  public authKey: string;
  constructor(private httpBaseService: HttpBaseService) { }

  ngOnInit(): void {
  }

  public setAuthKey(): void {
    this.httpBaseService.AddAuthorisationHeader(this.authKey);
  }
}
