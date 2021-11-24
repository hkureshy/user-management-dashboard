import React, { useEffect } from 'react';
import { Container } from '@mui/material';

import { UserActions } from '../Components/Users/UserActions';
import { UsersList } from '../Components/Users/UsersList';

const Users = ({
  loading,
  originalCount,
  users,
  user,
  getUsers,
  deleteUser,
  removeUser,
  sortUsers,
  setUser
}) => {

  useEffect(() => {
    if (originalCount === 0) {
      getUsers()
    }
  }, [originalCount, getUsers])

  return (
    <Container>
      <UserActions />
      <UsersList
        loading={loading}
        users={users}
        user={user}
        deleteUser={deleteUser}
        removeUser={removeUser}
        sortUsers={sortUsers}
        setUser={setUser}
      />
    </Container>
  );
}

export { Users };
