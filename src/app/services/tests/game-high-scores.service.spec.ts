import { TestBed } from '@angular/core/testing';

import { GameHighScoresService } from '../game-high-scores.service';

describe('GameHighScoresService', () => {
  let service: GameHighScoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameHighScoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
