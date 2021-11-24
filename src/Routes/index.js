import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Users, User } from '../Redux/Container';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Users />} />
      <Route exact path='/user' element={<User />} />
      <Route exact path='/user/:id' element={<User />} />
      <Route path='*' element={<Navigate replace to='/' />} />
    </Routes>
  );
}

export { AppRoutes };
