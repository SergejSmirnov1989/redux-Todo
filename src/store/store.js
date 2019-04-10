import { createStore, applyMiddleware, compose } from 'redux';
import { itemMiddleWare } from '../middleWare/middleWare';
import reducer from '../reducer';

const middleWare = applyMiddleware(itemMiddleWare);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(middleWare));

export default store;
