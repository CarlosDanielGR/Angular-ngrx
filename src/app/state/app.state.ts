import { ItemState } from '@core/models/Item.interface';
import { ActionReducerMap } from '@ngrx/store';
import { itemReducer } from './reducers/item.reducer';

interface AppStore {
  item_state: ItemState;
}

export const ROOT_REDUCER: ActionReducerMap<AppStore> = {
  item_state: itemReducer,
};
