import {RESPONSE, SETUSERTOKEN, SET_MESSAGE_DOC_URL} from '../types';

export const loginResponse = (data: any) => {
  return {
    type: RESPONSE,
    data: data,
  };
};

export const createDocUrl = (data: any) => {
  return {
    type: SET_MESSAGE_DOC_URL,
    data: data,
  };
};
export const setUserToken = (data: any) => {
  return {
    type: SETUSERTOKEN,
    data: data,
  };
};
