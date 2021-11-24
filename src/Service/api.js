import axios from 'axios';

import * as types from '../Redux/Actions/Types';

const instance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data'
});

const loading = () => ({ type: types.LOADING });
const loading_complete = () => ({ type: types.LOADING_COMPLETE });

const api = {
  get: (options) => async dispatch => {
    dispatch(loading());
    const [success, failure] = options.types;
    const promise = (resolve, reject) => {
      return instance.get(options.url)
        .then(res => {
          dispatch(loading_complete());
          resolve(dispatch({
            type: success,
            payload: res.data
          }))
        })
        .catch(err => {
          dispatch(loading_complete());
          reject(dispatch({
            type: failure,
            payload: err
          }))
        })
    }

    return new Promise(promise);
  },
  post: (options, params = null) => async dispatch => {
    const [success, failure] = options.types;
    const promise = (resolve, reject) => {
      instance.post(options.url, params)
        .then(res => {
          resolve(dispatch({
            type: success,
            payload: res.data
          }))
        })
        .catch(err => {
          reject(dispatch({
            type: failure,
            payload: err
          }))
        })
    }

    return new Promise(promise);
  },
  put: (options, params = null) => async dispatch => {
    const [success, failure] = options.types;
    const promise = (resolve, reject) => {
      instance.put(options.url, params)
        .then(res => {
          resolve(dispatch({
            type: success,
            payload: res.data
          }))
        })
        .catch(err => {
          reject(dispatch({
            type: failure,
            payload: err
          }))
        })
    }

    return new Promise(promise);
  },
  delete: options => async dispatch => {
    dispatch(loading());
    const [success, failure] = options.types;
    const promise = (resolve, reject) => {
      instance.delete(options.url)
        .then(res => {
          dispatch(loading_complete());
          resolve(dispatch({
            type: success,
            payload: res.data
          }))
        })
        .catch(err => {
          dispatch(loading_complete());
          reject(dispatch({
            type: failure,
            payload: err
          }))
        })
    }

    return new Promise(promise);
  }
}

export { api };
