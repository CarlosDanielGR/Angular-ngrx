import { ItemState } from '@core/models/Item.interface';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectItemsFeature = (state: AppState) => state.item_state;

export const selectItemList = createSelector(
  selectItemsFeature,
  (state: ItemState) => state.items
);
/**
 * min => 915
 * https://www.youtube.com/watch?v=d0r8sl9w78g&list=PL_WGMLcL4jzVkzMox4UxGcsBLvFurCDax&index=6
 */
