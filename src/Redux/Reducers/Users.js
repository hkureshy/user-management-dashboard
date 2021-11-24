import * as types from '../Actions/Types';

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case types.GET_USERS_SUCCESS:
        return {
          ...state,
          users: action.payload
        };
      case types.GET_USERS_FAILURE:
        return {
          ...initialState
        };
      default:
        return state;
    }
  }
  return state;
};

export { usersReducer };
