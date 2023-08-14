import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

export const Nav = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.link)}
        to="/register"
      >
        REGISTER
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.link)}
        to="/login"
      >
        LOG IN
      </NavLink>
    </div>
  );
};
