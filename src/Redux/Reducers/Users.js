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
      case types.SAVE_USER_SUCCESS:
        return {
          ...initialState,
          users: [ ...state.users, action.payload ]
        }
      case types.UPDATE_USER_SUCCESS:
        return {
          ...initialState,
          users: state.users.map((user) => {
            if (user.id === action.payload.id) {
              return action.payload
            }
            return user
          })
        }
      case types.REMOVE_USER:
        return {
          ...initialState,
          users: state.users.filter((user) => user.id !== action.payload)
        }
      default:
        return state;
    }
  }
  return state;
};

export { usersReducer };
