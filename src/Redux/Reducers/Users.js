import * as types from '../Actions/Types';

const initialState = {
  originalCount: 0,
  users: [],
};

const usersReducer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case types.GET_USERS_SUCCESS:
        return {
          ...state,
          users: action.payload,
          originalCount: action.payload.length
        };
      case types.GET_USERS_FAILURE:
        return {
          ...initialState
        };
      case types.SAVE_USER_SUCCESS:
        return {
          ...state,
          users: [ ...state.users, action.payload ]
        }
      case types.UPDATE_USER_SUCCESS:
        return {
          ...state,
          users: state.users.map((user) => {
            if (user.id === action.payload.id) {
              return action.payload
            }
            return user
          })
        }
      case types.REMOVE_USER:
        return {
          ...state,
          users: state.users.filter((user) => user.id !== action.payload)
        }
      default:
        return state;
    }
  }
  return state;
};

export { usersReducer };
