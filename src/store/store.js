import { createStore, applyMiddleware } from 'redux';
import { itemMiddleWare } from '../middleWare/middleWare';
import reducer from '../reducer';

const middleWare = applyMiddleware(itemMiddleWare);

const store = createStore(reducer, middleWare);

export default store;
