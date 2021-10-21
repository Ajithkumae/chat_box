import {LOADER} from '../types';

export const loader = (data: boolean) => {
  return {
    type: LOADER,
    data: data,
  };
};
