export interface ItemModel {
  name: string;
  price: number;
  image: string;
}

export interface ItemState {
  loading: boolean;
  items: ReadonlyArray<ItemModel>;
}
