import { createAction, props } from '@ngrx/store';
import { ItemModel } from '@core/models/Item.interface';

export const loadItems = createAction('[Item list] load Item');

export const loadedItems = createAction(
  '[Item list] loaded success',
  props<{ items: ItemModel[] }>()
);
