import { NavLink } from 'react-router-dom';
import css  from './Navigation.module.css';


const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/">Home</NavLink>
    </nav>
  );
};

export default Navigation;