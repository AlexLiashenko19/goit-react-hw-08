import { NavLink } from 'react-router-dom';
import css from './UserMenu.module.css'
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ContactsPage from '../../pages/ContactsPage';
import { useDispatch } from 'react-redux';
import { apiLogout } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(apiLogout());
  };
  return (
      <nav className={css.nav}>
        <NavLink to="/contacts" 
        element={<PrivateRoute component={<ContactsPage/>}/>}>
          Contacts
          </NavLink>
          <NavLink onClick={handleLogout}>Logout</NavLink>
      </nav>
  );
};

export default UserMenu;