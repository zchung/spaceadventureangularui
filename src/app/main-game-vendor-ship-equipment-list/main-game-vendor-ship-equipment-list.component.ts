import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ShipEquipmentList } from '../models/ship-equipment-list-model';
import { ShieldsModel } from '../models/shields-model';
import { EnginesModel } from '../models/engines-model';
import { WeaponModel } from '../models/weapon-model';
import { MiningLaserModel } from '../models/mining-laser-model';
import { EquipmentSelected } from '../models/requests/equipment-selected';
import { ToolType } from '../models/enums/tool-type';

@Component({
  selector: 'app-main-game-vendor-ship-equipment-list',
  templateUrl: './main-game-vendor-ship-equipment-list.component.html',
  styleUrls: ['./main-game-vendor-ship-equipment-list.component.scss']
})
export class MainGameVendorShipEquipmentListComponent implements OnInit {
  @Input() public shipEquipment: ShipEquipmentList;
  @Input() public credits: number;
  @Output() public selectedEquipmentEvent: EventEmitter<EquipmentSelected> = new EventEmitter();

  public selectedShield: ShieldsModel | null = null;
  public selectedEngine: EnginesModel | null = null;
  public selectedWeapon: WeaponModel | null = null;
  public selectedMiningLaser: MiningLaserModel | null = null;
  constructor() { }

  ngOnInit(): void {
  }

  public onShieldSelected(shield: ShieldsModel) {
    this.resetEquipment();
    this.selectedShield = shield;
    this.selectedEquipmentEvent.emit(new EquipmentSelected(shield.id, ToolType.Shields));
  }

  public onEngineSelected(engine: EnginesModel) {
    this.resetEquipment();
    this.selectedEngine = engine;
    this.selectedEquipmentEvent.emit(new EquipmentSelected(engine.id, ToolType.Engines));
  }

  public onWeaponSelected(weapon: WeaponModel) {
    this.resetEquipment();
    this.selectedWeapon = weapon;
    this.selectedEquipmentEvent.emit(new EquipmentSelected(weapon.id, ToolType.Weapons));
  }

  public onMiningLaserSelected(miningLaser: MiningLaserModel) {
    this.resetEquipment();
    this.selectedMiningLaser = miningLaser;
    this.selectedEquipmentEvent.emit(new EquipmentSelected(miningLaser.id, ToolType.Mining));
  }

  private resetEquipment(): void {
    this.selectedShield = null;
    this.selectedEngine = null;
    this.selectedWeapon = null;
    this.selectedMiningLaser = null;
  }
}
