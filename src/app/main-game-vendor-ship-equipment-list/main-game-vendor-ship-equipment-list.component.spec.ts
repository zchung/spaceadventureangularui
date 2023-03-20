import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGameVendorShipEquipmentListComponent } from './main-game-vendor-ship-equipment-list.component';

describe('MainGameVendorShipEquipmentListComponent', () => {
  let component: MainGameVendorShipEquipmentListComponent;
  let fixture: ComponentFixture<MainGameVendorShipEquipmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGameVendorShipEquipmentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGameVendorShipEquipmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
