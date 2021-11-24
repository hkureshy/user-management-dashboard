import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Users, User } from '../Redux/Container';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Users />} />
      <Route exact path='/user' element={<User />} />
      <Route exact path='/user/:id' element={<User />} />
    </Routes>
  );
}

export { AppRoutes };
