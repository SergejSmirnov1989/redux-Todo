import { NEW_ITEM, SET_STATUS, DELETE_ITEM, SORT_CREATE, EDIT, EDIT_SAVE } from '../const';

export const onNewItemSave = item => ({
  type: NEW_ITEM,
  payload: { item },
});

export const onStatusSet = id => ({
  type: SET_STATUS,
  payload: { id },
});

export const onItemRemove = id => ({
  type: DELETE_ITEM,
  payload: { id },
});

export const sortBy = selected => ({
  type: SORT_CREATE,
  payload: { selected },
});

export const rememberPathId = (path, id) => ({
  type: EDIT,
  payload: { path, id },
});

export const onEditSave = (text, id) => ({
  type: EDIT_SAVE,
  payload: { text, id },
});
