import css from './ContactList.module.css';
import Contacts from '../Contacts/Contacts';
import { selectFilteredContacts } from '../../redux/contacts/selector';
import { useSelector } from 'react-redux';

const ContactList = () => {

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.movieList}>
      {filteredContacts.map((state) => (
        <li key={state.id}>
          <Contacts state={state}/>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;