import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

import { UserForm } from '../Components/User/UserForm';

const User = ({
  user,
  getUser
}) => {
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getUser(params.id);
    }
  }, [getUser, params])

  return (
    <Container fixed>
      <Typography className='mt-2 mb-2' variant='h3'>
        { params.id ? 'Update User' : 'New User'}
      </Typography>
      <UserForm user={user} />
    </Container>
  );
}

export { User };
