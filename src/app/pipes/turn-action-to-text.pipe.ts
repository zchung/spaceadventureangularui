import { PipeTransform, Pipe } from '@angular/core';
import { TurnAction } from '../models/enums/turn-action';

@Pipe({name: 'turnActionToText'})
export class TurnActionToTextPipe implements PipeTransform {
  transform(value: TurnAction): string {
    switch (value) {
      case TurnAction.Travel:
        return 'Travel';
      case TurnAction.Combat:
        return 'Combat';
      case TurnAction.Mine:
        return 'Mine';
      case TurnAction.Trade:
        return 'Trade';
      default:
        break;
    }
    return '';
  }

}
