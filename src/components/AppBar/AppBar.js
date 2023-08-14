import { useAuth } from 'hooks';
import css from './AppBar.module.css';
import { Navigation } from 'components/Navigation/Navigation';
import { User } from 'components/User/User';
import { Nav } from 'components/Nav/Nav';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <User /> : <Nav />}
    </header>
  );
};
