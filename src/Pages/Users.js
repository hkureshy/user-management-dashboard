import React, { useEffect } from 'react';
import { Container } from '@mui/material';

import { UserActions } from '../Components/Users/UserActions';
import { UsersList } from '../Components/Users/UsersList';

const Users = ({
  loading,
  originalCount,
  users,
  getUsers,
  deleteUser,
  removeUser
}) => {

  useEffect(() => {
    if (originalCount === 0) {
      getUsers()
    }
  }, [originalCount, getUsers])

  return (
    <Container>
      <UserActions />
      <UsersList loading={loading} users={users} deleteUser={deleteUser} removeUser={removeUser} />
    </Container>
  );
}

export { Users };
