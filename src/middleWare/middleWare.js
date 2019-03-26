import uniqid from 'uniqid';
import { STORAGE_NAME } from '../const';

export const itemMiddleWare = store => next => action => {
  next(action);
  store.getState().items.map(item => {
    if (!item.id) {
      item.id = uniqid();
    }
    if (!item.createdAt) {
      item.createdAt = Date.now();
    }
    return item;
  });
  // store.getState().items.map(item => {
  //   if (item.selectedDay < Date.now()) {
  //     item.status = 'expired';
  //   }
  //   return item
  // });

  localStorage.setItem(STORAGE_NAME, JSON.stringify(store.getState().items));
};
