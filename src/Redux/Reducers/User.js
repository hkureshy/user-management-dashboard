import * as types from '../Actions/Types';

const initialState = {
  user: {}
};

const userReducer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case types.GET_USER_SUCCESS:
        return {
          ...state,
          user: action.payload
        };
      case types.GET_USER_FAILURE:
        return {
          ...initialState
        };
      default:
        return state;
    }
  }
  return state;
};

export { userReducer };
