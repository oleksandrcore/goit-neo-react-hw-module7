import Contact from '../Contact/Contact.jsx'
import css from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactSlice';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  if (!contacts || contacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contact}>
          <Contact contact={contact}/>
        </li>
      ))}
    </ul>
  )
}

export default ContactList
