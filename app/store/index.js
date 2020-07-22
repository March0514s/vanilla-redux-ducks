import { createStore, applyMiddleware } from 'redux';
import { statusReducer } from './ducks/status';
import thunk from 'redux-thunk';

const middlewares = applyMiddleware(thunk);
export const store = createStore(statusReducer, middlewares);
