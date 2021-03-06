import * as types from './Types';
import { api } from '../../Service/api';

export const getUsers = () => {
  let options = { url: '/' };
  options.types = [
    types.GET_USERS_SUCCESS,
    types.GET_USERS_FAILURE
  ]

  return api.get(options);
};

export const sortUsers = (direction) => (dispatch) => {
  return dispatch({
    type: types.SORT_USERS,
    payload: direction
  });
};

export const deleteUser = (id) => {
  let options = { url: `/${id}` };
  options.types = [
    types.DELETE_USER_SUCCESS,
    types.DELETE_USER_FAILURE
  ]

  return api.delete(options);
};

export const removeUser = (id) => (dispatch) => {
  return dispatch({
    type: types.REMOVE_USER,
    payload: id
  });
};
