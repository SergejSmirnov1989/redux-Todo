import { combineReducers } from 'redux';
import items from './items';
import sortBy from './sortBy';
import path from './path';
import editStart from './editStart';

export default combineReducers({
  items,
  sortBy,
  path,
  editStart,
});
