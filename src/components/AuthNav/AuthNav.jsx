import { NavLink } from 'react-router-dom';
import RegistrationPage from '../../pages/RegistrationPage';
import LoginPage from '../../pages/LoginPage';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import css from "./AuthNav.module.css"

const AuthNav = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/register" element={
        <RestrictedRoute component={<RegistrationPage/>}/>
      }>Register</NavLink>
      <NavLink to="/login" element={
        <RestrictedRoute component={<LoginPage/>}/>
      }>Log In</NavLink>
    </nav>
  );
};

export default AuthNav;