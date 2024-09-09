import { useDispatch } from "react-redux";
import { apiDeleteContact } from "../../redux/сontacts/operations";
import css from "./Contacts.module.css"

const Contacts = ({ state,  }) => {

  const dispatch = useDispatch();

  const onDeleteContact = (contactsId) => {
    dispatch(apiDeleteContact(contactsId));
  };

  return (
    <div className={css.contacts}>
      <span>Name: {state.name}</span>
      <span>Number: {state.number}</span>
      <button onClick={() => onDeleteContact(state.id)} type="button" >Delete</button>
    </div>
  );
};

export default Contacts;