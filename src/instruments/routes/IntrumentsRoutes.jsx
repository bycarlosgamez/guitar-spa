import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui/components/Navbar';
import {
  HomePage,
  FenderPage,
  GibsonPage,
  SearchPage,
  GuitarPage,
} from '../pages';

export const IntrumentsRoutes = () => {
  return (
    <>
      <Navbar />

      <div className='container mx-auto p-4'>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/fender' element={<FenderPage />}></Route>
          <Route path='/gibson' element={<GibsonPage />}></Route>

          <Route path='/search' element={<SearchPage />}></Route>
          <Route path='/guitar' element={<GuitarPage />}></Route>
        </Routes>
      </div>
    </>
  );
};
