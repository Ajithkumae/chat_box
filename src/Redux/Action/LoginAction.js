import {RESPONSE} from '../types';

export const response = data => {
  return {
    type: RESPONSE,
    data: data,
  };
};
