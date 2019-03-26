import { NEW_ITEM, SET_STATUS, DELETE_ITEM, SORT_CREATE } from '../const';

export const newItem = item => ({
  type: NEW_ITEM,
  payload: { item },
});

export const setStatus = id => ({
  type: SET_STATUS,
  payload: { id },
});

export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: { id },
});

export const sortBy = selected => {
  return {
    type: SORT_CREATE,
    payload: { selected },
  };
};
