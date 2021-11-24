import React, { useEffect } from 'react';
import { Container } from '@mui/material';

import { UserActions } from '../Components/Users/UserActions';
import { UsersList } from '../Components/Users/UsersList';

const Users = ({
  users,
  getUsers,
  deleteUser
}) => {

  useEffect(() => {
    
    if (users.length === 0) {
      getUsers()
    }
  }, [users, getUsers])

  return (
    <Container>
      <UserActions />
      <UsersList users={users} deleteUser={deleteUser} />
    </Container>
  );
}

export { Users };
