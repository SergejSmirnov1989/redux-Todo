import { NEW_ITEM, SET_STATUS, STORAGE_NAME, DELETE_ITEM, EDIT_SAVE } from '../const';

const defaultStore = JSON.parse(localStorage.getItem(STORAGE_NAME)) || [];

export default (store = defaultStore, { type, payload }) => {
  switch (type) {
    case NEW_ITEM:
      return store.concat(payload.item);
    case SET_STATUS:
      return store.map(item => {
        if (item.id === payload.id) {
          item.status = item.status === 'active' ? 'complete' : 'active';
        }
        return item;
      });
    case DELETE_ITEM:
      return store.filter(item => item.id !== payload.id);
    case EDIT_SAVE:
      return store.map(item => {
        if (item.id === payload.id) {
          item.text = payload.text;
        }
        return item;
      });
    default:
      return store;
  }
};
