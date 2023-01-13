import { ItemState, ItemModel } from '@core/models/Item.interface';
import { createReducer, on } from '@ngrx/store';
import { loadItems } from '../actions/item.action';

export const initialState: ItemState = {
  loading: false,
  item: [],
};

export const itemReducer = createReducer(
  initialState,
  on(loadItems, (state) => {
    return { ...state, loading: true };
  })
);
