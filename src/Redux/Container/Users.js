import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Users } from '../../Pages/Users';

import { getUsers, deleteUser, removeUser } from '../Actions/Users';

const mapStateToProps = state => {
  return {
    loading: state.loadingReducer.loading,
    users: state.usersReducer.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: bindActionCreators(getUsers, dispatch),
    deleteUser: bindActionCreators(deleteUser, dispatch),
    removeUser: bindActionCreators(removeUser, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
