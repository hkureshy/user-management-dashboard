import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { User } from '../../Pages/User';

import { getUser, saveUser, updateUser } from '../Actions/User';

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: bindActionCreators(getUser, dispatch),
    saveUser: bindActionCreators(saveUser, dispatch),
    updateUser: bindActionCreators(updateUser, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
