import { combineReducers } from 'redux';
import loginReducer from './LoginReducer';

export const appReducer = combineReducers({
  loginReducer: loginReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
