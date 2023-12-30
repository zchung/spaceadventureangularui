import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TradeAction } from '../models/enums/trade-action';
import { TurnAction } from '../models/enums/turn-action';
import { EquipmentSelected } from '../models/requests/equipment-selected';
import { ShipEquipmentList } from '../models/ship-equipment-list-model';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-main-game-turn-actions',
  templateUrl: './main-game-turn-actions.component.html',
  styleUrls: ['./main-game-turn-actions.component.scss']
})
export class MainGameTurnActionsComponent implements OnInit {
  public showTradeActions: boolean = false;
  public showVendorShop: boolean = false;
  @Input() public availableTurnActions: Array<TurnAction> = new Array<TurnAction>();
  @Input() public availableTradeActions: Array<TradeAction> = new Array<TradeAction>();
  @Input() public selectedTurnAction: TurnAction = TurnAction.Travel;
  @Input() public selectedTradeAction: TradeAction = TradeAction.ResourcesForCredits; // default value
  @Input() public shipEquipment: ShipEquipmentList;
  @Input() public credits: number;
  @Output() public onTurnSelectedEvent: EventEmitter<TurnAction> = new EventEmitter();
  @Output() public onTradeActionChangedEvent: EventEmitter<TradeAction> = new EventEmitter();
  @Output() public onSelectedEquipmentEvent: EventEmitter<EquipmentSelected> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onTurnSelected(event: MatRadioChange): void {
    if (event.value === TurnAction.Trade) {
      this.showTradeActions = true;
      if (this.selectedTradeAction == TradeAction.Shop) {
        this.showVendorShop = true;
      }
    } else {
      this.showTradeActions = false;
      this.showVendorShop = false;
    }
    this.onTurnSelectedEvent.emit(event.value);
  }

  public onTradeActionChanged(tradeAction: TradeAction) {
    if (tradeAction === TradeAction.Shop) {
      this.showVendorShop = true;
    } else {
      this.showVendorShop = false;
    }
    if (this.onTradeActionChangedEvent) {
      this.onTradeActionChangedEvent.emit(tradeAction);
    }
  }

  public onSelectedEquipment(selectedEquipmentEvent: EquipmentSelected) {
    this.onSelectedEquipmentEvent.emit(selectedEquipmentEvent);
  }
}
