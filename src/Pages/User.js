import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Typography, CircularProgress } from '@mui/material';

import { UserForm } from '../Components/User/UserForm';

const User = ({
  loading,
  originalCount,
  users,
  user,
  getUsers,
  setUser,
  saveUser,
  updateUser
}) => {
  const params = useParams();

  useEffect(() => {
    if (originalCount === 0) {
      getUsers();
    }
  }, [originalCount, getUsers])

  return (
    <Container fixed>
      <Box my={2}>
        <Typography variant='h3' component='div'>
          { params.id ? 'Update User' : 'New User'}
        </Typography>
      </Box>
      { !loading ?
        <UserForm
          users={users}
          user={user}
          setUser={setUser}
          saveUser={saveUser}
          updateUser={updateUser}
        /> :
        <CircularProgress color='inherit' size={25} />
      }
    </Container>
  );
}

export { User };
