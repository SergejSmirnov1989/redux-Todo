import { combineReducers } from 'redux';
import items from './items';
import sortBy from './sortBy';

export default combineReducers({
  items,
  sortBy,
});
