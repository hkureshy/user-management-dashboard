import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Users } from '../../Pages/Users';

import { getUsers, sortUsers, deleteUser, removeUser } from '../Actions/Users';
import { setUser } from '../Actions/User';

const mapStateToProps = state => {
  return {
    loading: state.loadingReducer.loading,
    originalCount: state.usersReducer.originalCount,
    users: state.usersReducer.users,
    user: state.userReducer.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: bindActionCreators(getUsers, dispatch),
    deleteUser: bindActionCreators(deleteUser, dispatch),
    removeUser: bindActionCreators(removeUser, dispatch),
    sortUsers: bindActionCreators(sortUsers, dispatch),
    setUser: bindActionCreators(setUser, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
