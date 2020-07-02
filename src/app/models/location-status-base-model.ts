import { TurnAction } from './enums/turn-action';

export class LocationStatusBaseModel {
  protected baseTurnActions: Array<TurnAction>;
  constructor(baseTurnActions: Array<TurnAction>) {
    this.baseTurnActions = baseTurnActions ?? new Array<TurnAction>();
  }
}
