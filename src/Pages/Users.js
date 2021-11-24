import React, { useEffect } from 'react';
import { Container } from '@mui/material';

import { UserActions } from '../Components/Users/UserActions';
import { UsersList } from '../Components/Users/UsersList';

const Users = ({
  users,
  getUsers
}) => {

  useEffect(() => {
    getUsers()
  }, [getUsers])

  return (
    <Container>
      <UserActions />
      <UsersList users={users} />
    </Container>
  );
}

export { Users };
