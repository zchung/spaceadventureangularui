import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRandomShipsComponent } from './new-random-ships.component';

describe('NewRandomShipsComponent', () => {
  let component: NewRandomShipsComponent;
  let fixture: ComponentFixture<NewRandomShipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRandomShipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRandomShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
