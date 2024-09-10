import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetAllContacts } from '../redux/contacts/operations';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import SearchBar from '../components/SearchBar/SearchBar';
import { selectorLoading } from '../redux/contacts/selector';
import Loader from '../components/Loader/Loader';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectorLoading);

  useEffect(() => {
    dispatch(apiGetAllContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBar/>
      {isLoading ? (
        <Loader/>
      ) : (
        <ContactList/>
      )}
    </div>
  )
}

export default ContactsPage
