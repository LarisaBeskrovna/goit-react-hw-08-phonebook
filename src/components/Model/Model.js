import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader';
import css from './Model.module.css';

export const Model = () => {
  return (
    <div className={css.model}>
      <AppBar />
      <Suspense fallback={Loader}>
        <Outlet />
      </Suspense>
    </div>
  );
};
