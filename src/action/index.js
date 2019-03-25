import { NEW_ITEM } from '../const';

export const newItem = item => ({
  type: NEW_ITEM,
  payload: { item },
});
