import css from './UserMenu.module.css'
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    try {
      await dispatch(logOut()).unwrap();
    } catch (error) {
      console.error('Failed to log out:', error.message);
    }
  };

  return (
    <div className={css.userMenu}>
      <button  type="button" onClick={handleLogOut} className={css.lohoutButton}>
        Log out
      </button>
      </div>
  );
};

export default UserMenu;