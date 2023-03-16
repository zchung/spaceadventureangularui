import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGameTabsComponent } from './main-game-tabs.component';

describe('MainGameTabsComponent', () => {
  let component: MainGameTabsComponent;
  let fixture: ComponentFixture<MainGameTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGameTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGameTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
