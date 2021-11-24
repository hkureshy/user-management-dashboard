import { combineReducers } from 'redux';

import { loadingReducer } from './Loading';
import { usersReducer } from './Users';
import { userReducer } from './User';

export default combineReducers({
  loadingReducer,
  usersReducer,
  userReducer
});
