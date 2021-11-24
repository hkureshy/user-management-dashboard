import * as types from '../Actions/Types';

const initialState = {
  user: {}
};

const userReducer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case types.SET_USER:
        return {
          ...state,
          user: action.payload
        };
      default:
        return state;
    }
  }
  return state;
};

export { userReducer };
