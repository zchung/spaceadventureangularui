import { LocationStatusModel } from './interfaces/location-status-model';
import { TurnAction } from './enums/turn-action';
import { LocationStatusBaseModel } from './location-status-base-model';

export class HostileLocationStatus extends LocationStatusBaseModel implements LocationStatusModel {
  constructor(baseTurnActions: Array<TurnAction>) {
    super(baseTurnActions);
  }

  getDropdownOptions(): Array<TurnAction> {
    this.baseTurnActions.push(TurnAction.Mine);
    this.baseTurnActions.push(TurnAction.Combat);
    return this.baseTurnActions;
  }
}
