import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Typography, CircularProgress } from '@mui/material';

import { UserForm } from '../Components/User/UserForm';

const User = ({
  loading,
  users,
  user,
  getUsers,
  getUser,
  saveUser,
  updateUser
}) => {
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getUser(params.id);
    }
    if (users.length === 0) {
      getUsers();
    }
  }, [params, users, getUsers, getUser])

  return (
    <Container fixed>
      <Box my={2}>
        <Typography variant='h3' component='div'>
          { params.id ? 'Update User' : 'New User'}
        </Typography>
      </Box>
      { !loading ?
        <UserForm users={users} user={user} saveUser={saveUser} updateUser={updateUser} /> :
        <CircularProgress color='inherit' size={25} />
      }
    </Container>
  );
}

export { User };
