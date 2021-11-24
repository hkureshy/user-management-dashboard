import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Typography } from '@mui/material';

import { UserForm } from '../Components/User/UserForm';

const User = ({
  loading,
  user,
  getUser,
  saveUser,
  updateUser
}) => {
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getUser(params.id);
    }
  }, [getUser, params])

  return (
    <Container fixed>
      { !loading &&
        <>
          <Box my={2}>
            <Typography variant='h3' component='div'>
              { params.id ? 'Update User' : 'New User'}
            </Typography>
          </Box>
          <UserForm user={user} saveUser={saveUser} updateUser={updateUser} />
        </>
      }
    </Container>
  );
}

export { User };
