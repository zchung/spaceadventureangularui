import { TurnAction } from "./enums/turn-action";
import { LocationStatusModel } from "./interfaces/location-status-model";
import { LocationStatusBaseModel } from "./location-status-base-model";

export class EmptyLocationStatus extends LocationStatusBaseModel implements LocationStatusModel {
  getDropdownOptions(): TurnAction[] {
    return [];
  }

}
