import { SORT_CREATE } from '../const';

export default (store = 'createdAt', { type, payload }) => {
  switch (type) {
    case SORT_CREATE:
      return payload.selected;
    default:
      return store;
  }
};
