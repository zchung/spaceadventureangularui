import { PipeTransform, Pipe } from '@angular/core';
import { TradeAction } from '../models/enums/trade-action';

@Pipe({name: 'tradeActionToText'})
export class TradeActionToTextPipe implements PipeTransform {
  transform(value: TradeAction): string {
    switch (value) {
      case TradeAction.CreditsForPower:
        return 'Trade Credits for Power.';
      case TradeAction.CreditsForShipHitpoints:
        return 'Trade Credits for Ship Repair.';
      case TradeAction.ResourcesForCredits:
        return 'Trade Resources for Credits.';
      case TradeAction.ResourcesForPower:
        return 'Trade Resources for Power.';
      case TradeAction.ResourcesForShipHitpoints:
        return 'Trade Resources for Ship Repair.';
      case TradeAction.Shop:
        return 'Shop';
      default:
        break;
    }
    return '';
  }

}
