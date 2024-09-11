import css from './UserMenu.module.css'
import { useDispatch } from 'react-redux';
import { apiLogout } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.userMenu}>
      <button  type="button" onClick={() => dispatch(apiLogout())} className={css.lohoutButton}>
        Log out
      </button>
      </div>
  );
};

export default UserMenu;