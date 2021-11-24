import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Users } from '../../Pages/Users';

import { getUsers, deleteUser } from '../Actions/Users';

const mapStateToProps = state => {
  return {
    users: state.usersReducer.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: bindActionCreators(getUsers, dispatch),
    deleteUser: bindActionCreators(deleteUser, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
