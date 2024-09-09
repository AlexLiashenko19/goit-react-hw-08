import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthLoggedIn } from '../../redux/auth/selectors';

const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectAuthLoggedIn);
  const location = useLocation();

  if (isLoggedIn) {
    return <Navigate to="/contacts" state={{ from: location }} replace />;
  }
  return children;
};

export default RestrictedRoute;