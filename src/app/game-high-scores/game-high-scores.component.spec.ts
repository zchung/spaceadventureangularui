import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHighScoresComponent } from './game-high-scores.component';

describe('GameHighScoresComponent', () => {
  let component: GameHighScoresComponent;
  let fixture: ComponentFixture<GameHighScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameHighScoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameHighScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
