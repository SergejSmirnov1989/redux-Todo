import { EDIT } from '../const';

export default (store = '/', { type, payload }) => {
  switch (type) {
    case EDIT:
      return payload.path;
    default:
      return store;
  }
};
