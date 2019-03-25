import { NEW_ITEM, STORAGE_NAME } from '../const';

const defaultStore = JSON.parse(localStorage.getItem(STORAGE_NAME)) || [];

export default (store = defaultStore, { type, payload }) => {
  switch (type) {
    case NEW_ITEM:
      return store.concat(payload.item);
    default:
      return store;
  }
};
