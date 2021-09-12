import { NavLink } from 'react-router-dom';
import { navList, navLink, navLinkActive } from './Navigation.module.css';

export default function AuthNav() {
  return (
    <nav className={navList}>
      <NavLink
        to="/register"
        exact
        className={navLink}
        activeClassName={navLinkActive}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={navLink}
        activeClassName={navLinkActive}
      >
        Log in
      </NavLink>
    </nav>
  );
}
