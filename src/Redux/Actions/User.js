import * as types from './Types';
import { api } from '../../Service/api';

export const getUser = (id) => {
  let options = { url: `/${id}` };
  options.types = [
    types.GET_USER_SUCCESS,
    types.GET_USER_FAILURE
  ]

  return api.get(options);
};

export const saveUser = (params) => {
  let options = { url: '/' };
  options.types = [
    types.SAVE_USER_SUCCESS,
    types.SAVE_USER_FAILURE
  ]

  return api.post(options, params);
};

export const updateUser = (params) => {
  let options = { url: `/${params.id}` };
  options.types = [
    types.UPDATE_USER_SUCCESS,
    types.UPDATE_USER_FAILURE
  ]

  return api.put(options, params);
};
