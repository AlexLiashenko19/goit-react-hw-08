import css from './UserMenu.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogOut = async () => {
    try {
      await dispatch(logOut()).unwrap();
    } catch (error) {
      console.error('Failed to log out:', error.message);
    }
  };

  return (
    <div className={css.userMenu}>
      <p className={css.userName}>Welcome, {user.name}✌️</p>
      <button  type="button" onClick={handleLogOut} className={css.lohoutButton}>
        Log out
      </button>
      </div>
  );
};

export default UserMenu;