import * as types from './Types';
import { api } from '../../Service/api';

export const setUser = (user) => (dispatch) => {
  return dispatch({
    type: types.SET_USER,
    payload: user
  });
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
