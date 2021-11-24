import React, { useEffect } from 'react';
import { Container } from '@mui/material';

import { UserActions } from '../Components/Users/UserActions';
import { UsersList } from '../Components/Users/UsersList';

const Users = ({
  loading,
  users,
  getUsers,
  deleteUser,
  removeUser
}) => {

  useEffect(() => {
    
    if (users.length === 0) {
      getUsers()
    }
  }, [users, getUsers])

  return (
    <Container>
      <UserActions />
      <UsersList loading={loading} users={users} deleteUser={deleteUser} removeUser={removeUser} />
    </Container>
  );
}

export { Users };
