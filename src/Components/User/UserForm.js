import React, { useCallback } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Box, Grid, TextField, Button, CircularProgress } from '@mui/material';
import { Formik } from 'formik';

import { initialValues, schema } from '../../Common/Rules/User';

const UserForm = ({
  users,
  user,
  saveUser,
  updateUser
}) => {
  const params = useParams();
  const navigate = useNavigate();

  const onSubmit = useCallback(async (values) => {
    if (params.id) {
      await updateUser(values);
    } else {
      const id = users.length > 0 ? Math.max.apply(Math, users.map((u) => u.id)) : 1;
      await saveUser({
        id: id < 11 ? 11 : id + 1,
        ...values,
        username: ''
      });
    }
    navigate('/');
  }, [params, users, saveUser, updateUser, navigate]);

  return (
    <Formik
      initialValues={params.id ? user : initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
      enableReinitialize
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
                key='Name'
                fullWidth
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
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
                key='Email'
                fullWidth
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email && errors.email}
                error={Boolean(touched.email && errors.email)}
              />
            </Grid>
            <Grid item xs={12}>
              <Box display='flex' justifyContent='flex-end'>
                <Link className='text-decor-none mr-1' to='/'>
                  <Button color='secondary' variant='outlined'>Cancel</Button>
                </Link>
                <Button
                  type='submit'
                  color='primary'
                  variant='contained'
                  disabled={isSubmitting}
                >
                  {isSubmitting && <CircularProgress color='inherit' size={20} />}
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
