import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningLaserComponent } from './mining-laser.component';

describe('MiningLaserComponent', () => {
  let component: MiningLaserComponent;
  let fixture: ComponentFixture<MiningLaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiningLaserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningLaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
