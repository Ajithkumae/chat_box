import {RESPONSE} from '../types';

const initialState = {
  callResponse: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESPONSE:
      return {...state, callResponse: action.data};
    default:
      return state;
  }
};

export default loginReducer;
