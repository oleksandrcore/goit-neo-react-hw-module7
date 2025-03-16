import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <div className={css.contactData}>
        <div className={css.name}>
          <IoPerson />
          <p>{contact.name}</p>
        </div>
        <div className={css.number}>
          <FaPhoneAlt />
          <p>{contact.number}</p>
        </div>
      </div>
      <button
        className={css.button}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
