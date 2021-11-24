import * as types from '../Actions/Types';

const initialState = {
  loading: false
};

const loadingReducer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case types.LOADING:
        return { ...state, loading: true };
      case types.LOADING_COMPLETE:
        return { ...state, loading: false };
      default:
        return state;
    }
  }
  return state;
};

export { loadingReducer };
