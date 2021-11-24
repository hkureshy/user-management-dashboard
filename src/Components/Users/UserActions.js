import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const UserActions = () => {
  return (
    <Box my={2} display='flex' justifyContent='space-between' alignItems='center'>
      <Typography variant='h3' component='div'>
        Users
      </Typography>
      <Link className='text-decor-none' to='/user'>
        <Button variant='contained'>Add New User</Button>
      </Link>
    </Box>
  );
}

export { UserActions };
