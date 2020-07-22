import { createStore } from 'redux';
import { statusReducer } from './ducks/status';

export const store = createStore(statusReducer);
