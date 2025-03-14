import { Route, Routes } from 'react-router-dom';

import { HomePage, FenderPage, GibsonPage } from '../instruments';

import { LoginPage } from '../auth/';

import { Navbar } from '../ui';

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/fender' element={<FenderPage />}></Route>
        <Route path='/gibson' element={<GibsonPage />}></Route>

        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
