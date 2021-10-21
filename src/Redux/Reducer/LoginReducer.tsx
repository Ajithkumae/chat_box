import {RESPONSE, SETUSERTOKEN, SET_MESSAGE_DOC_URL} from '../types';

const initialState = {
  userData: null,
  docUrl: null,
  userToken: null,
};

const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case RESPONSE:
      return {...state, userData: action.data};
    case SET_MESSAGE_DOC_URL:
      return {...state, docUrl: action.data};
    case SETUSERTOKEN:
      return {...state, userToken: action.data};
    default:
      return state;
  }
};

export default loginReducer;
