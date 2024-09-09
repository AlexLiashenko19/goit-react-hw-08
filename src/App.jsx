import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { apiRefreshUser } from './redux/auth/operations';
import { selectAuthIsRefreshing } from './redux/auth/selectors';

const App = () => {
  const dispatch = useDispatch()
  const isRefresh = useSelector(selectAuthIsRefreshing)

  useEffect(() => {
  dispatch(apiRefreshUser())
  }, [dispatch])

  if (isRefresh) return <p>User is refreshing, please wait</p>

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RestrictedRoute><RegistrationPage /></RestrictedRoute>} />
          <Route path="login" element={<RestrictedRoute><LoginPage /></RestrictedRoute>} />
          <Route path="contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;