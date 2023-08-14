import { useDispatch } from 'react-redux';
import css from './User.module.css';
import { useAuth } from 'hooks';
import { logOut } from 'redux/authorize/operation';

export const User = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button
        className={css.user_btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
