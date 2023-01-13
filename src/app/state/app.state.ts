import { ItemState } from '@core/models/Item.interface';
import { ActionReducerMap } from '@ngrx/store';
import { itemReducer } from './reducers/item.reducer';

export interface AppState {
  item_state: ItemState;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  item_state: itemReducer,
};
