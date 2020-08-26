import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import transactionReducer from '../reducers/transactions';
import { AppActions } from '../types/actions';

export const rootReducer = combineReducers({
  transactions: transactionReducer
});

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>));