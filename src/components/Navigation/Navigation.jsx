import { NavLink } from 'react-router-dom';
import css  from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';


const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.nav}>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <>
        <NavLink to="/contacts" className={css.link}>
          Contacts
        </NavLink>
        </>
      )}
    </div>
  );
};

export default Navigation;

