import { NEW_ITEM, SET_STATUS, STORAGE_NAME, DELETE_ITEM } from '../const';

const defaultStore = JSON.parse(localStorage.getItem(STORAGE_NAME)) || [];

export default (store = defaultStore, { type, payload }) => {
  switch (type) {
    case NEW_ITEM:
      return store.concat(payload.item);
    case SET_STATUS:
      return store
        .map(item => {
          if (item.id === payload.id) {
            item.status = item.status === 'active' ? 'complete' : 'active';
          }
          return item;
        })
        .slice();
    case DELETE_ITEM:
      return store.filter(item => item.id !== payload.id);
    default:
      return store;
  }
};
