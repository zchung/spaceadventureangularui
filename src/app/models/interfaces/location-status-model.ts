import { TurnAction } from '../enums/turn-action';

export interface LocationStatusModel {
  getDropdownOptions(): Array<TurnAction>;
}
