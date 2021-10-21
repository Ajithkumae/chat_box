import {combineReducers} from 'redux';
import loaderReducer from './LoaderReducer';
import loginReducer from './LoginReducer';

export const appReducer = combineReducers({
  loginReducer: loginReducer,
  loaderReducer: loaderReducer,
});

export const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};
