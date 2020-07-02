import { LocationStatusBaseModel } from './location-status-base-model';
import { LocationStatusModel } from './interfaces/location-status-model';
import { TurnAction } from './enums/turn-action';
export class NeutralLocationStatus extends LocationStatusBaseModel implements LocationStatusModel {
  constructor(baseTurnActions: Array<TurnAction>, private resourcesAvailable: number) {
    super(baseTurnActions);
  }

  getDropdownOptions(): Array<TurnAction> {
    if (this.resourcesAvailable > 0) {
      this.baseTurnActions.push(TurnAction.Mine);
    }
    return this.baseTurnActions;
  }
}
