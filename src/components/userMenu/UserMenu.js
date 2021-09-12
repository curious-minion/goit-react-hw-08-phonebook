import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import defaultAvatar from './default-avatar.png';
import {
  button_logout,
  greeting,
} from 'components/navigation/Navigation.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div>
      <img src={avatar} alt="" width="32" />
      <span className={greeting}>Welcome, {name}</span>
      <button
        type="button"
        className={button_logout}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
}
