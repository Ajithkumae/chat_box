import {LOADER} from '../types';

const initialState = {
  loaderState: false,
};

const loaderReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOADER:
      return {...state, loaderState: action.data};
    default:
      return state;
  }
};

export default loaderReducer;
