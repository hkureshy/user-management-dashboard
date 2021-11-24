import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, TextField, Button, CircularProgress } from '@mui/material';
import { Formik } from 'formik';

import { initialValues, schema } from '../../Common/Rules/User';

const UserForm = ({
  user
}) => {
  const onSubmit = useCallback((values) => {
    console.log(values)
  }, []);

  return (
    <Formik
      initialValues={user.id ? user : initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        touched,
        values,
        errors
      }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label='Name'
                name='name'
                type='text'
                variant='outlined'
                size='small'
                fullWidth
                autoFocus
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                helperText={touched.name && errors.name}
                error={Boolean(touched.name && errors.name)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='Email'
                name='email'
                type='text'
                variant='outlined'
                size='small'
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                helperText={touched.email && errors.email}
                error={Boolean(touched.email && errors.email)}
              />
            </Grid>
            <Grid item xs={12}>
              <Box display='flex' justifyContent='flex-end'>
                <Link className='text-decor-none mr-1' to='/'>
                  <Button variant='outlined'>Cancel</Button>
                </Link>
                <Button
                  type='submit'
                  color='primary'
                  variant='contained'
                  disabled={isSubmitting}
                >
                  {isSubmitting && <CircularProgress color='inherit' size={25} />}
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}

export { UserForm };
