import { useAuth } from 'hooks';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/authorize/operation';
import { Model } from './components/Model/Model';
import { LimitedPath } from './components/LimitedPath/LimitedPath';
import { PrivatePath } from './components/PrivatePath/PrivatePath';
import Loader from './components/Loader';

const HomePage = lazy(() => import('./pages/Home'));
const RegisterPage = lazy(() => import('./pages/Register'));
const LoginPage = lazy(() => import('./pages/Login'));
const MainPage = lazy(() => import('./pages/MainPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Model />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <LimitedPath redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <LimitedPath redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={<PrivatePath redirectTo="/login" component={<MainPage />} />}
        />
      </Route>
    </Routes>
  );
};
