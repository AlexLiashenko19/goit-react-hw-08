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
import { selectIsRefreshing } from './redux/auth/selectors';
import styles from "./App.module.css"

const App = () => {
  const dispatch = useDispatch()
  const isRefresh = useSelector(selectIsRefreshing)

  useEffect(() => {
  dispatch(apiRefreshUser())
  }, [dispatch])

  if (isRefresh) return <p>User is refreshing, please wait</p>

  return (
    <div className={styles.appContainer}>
      <Layout>
        <main className={styles.content}>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/register" element={<RestrictedRoute component={<RegistrationPage/>}/>} />
            <Route path="/login" element={<RestrictedRoute component={<LoginPage/>}/>} />
            <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/>}/>} />
          </Routes>
        </main>
      </Layout>
    </div>
  );
};

export default App;