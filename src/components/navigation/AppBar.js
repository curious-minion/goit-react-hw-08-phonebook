import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from '../userMenu';
import AuthNav from './AuthNav';
import { authSelectors } from 'redux/auth';
import { headerNav } from './Navigation.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={headerNav}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
