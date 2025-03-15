import { Navbar } from '../ui';

import { LoginPage } from '../auth/pages';
import { IntrumentsRoutes } from '../instruments';

import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/*' element={<IntrumentsRoutes />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
