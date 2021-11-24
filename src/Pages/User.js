import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

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
    <Container>
      <Typography variant='h3'>
        { params.id ? 'Update User' : 'New User'}
      </Typography>
    </Container>
  );
}

export { User };
