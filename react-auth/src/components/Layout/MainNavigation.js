import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggdeIn = authCth.isLoggdeIn;

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggdeIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {isLoggdeIn && (
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          {isLoggdeIn && (
            <li>
              <button>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
