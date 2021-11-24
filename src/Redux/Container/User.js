import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { User } from '../../Pages/User';

import { getUsers } from '../Actions/Users';
import { getUser, saveUser, updateUser } from '../Actions/User';

const mapStateToProps = state => {
  return {
    loading: state.loadingReducer.loading,
    users: state.usersReducer.users,
    user: state.userReducer.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: bindActionCreators(getUser, dispatch),
    getUsers: bindActionCreators(getUsers, dispatch),
    saveUser: bindActionCreators(saveUser, dispatch),
    updateUser: bindActionCreators(updateUser, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
