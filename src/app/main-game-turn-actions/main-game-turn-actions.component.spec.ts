import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGameTurnActionsComponent } from './main-game-turn-actions.component';

describe('MainGameTurnActionsComponent', () => {
  let component: MainGameTurnActionsComponent;
  let fixture: ComponentFixture<MainGameTurnActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGameTurnActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGameTurnActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
