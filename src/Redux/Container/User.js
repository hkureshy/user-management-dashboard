import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { User } from '../../Pages/User';

import { getUsers } from '../Actions/Users';
import { setUser, saveUser, updateUser } from '../Actions/User';

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
    setUser: bindActionCreators(setUser, dispatch),
    saveUser: bindActionCreators(saveUser, dispatch),
    updateUser: bindActionCreators(updateUser, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
