import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.fieldContainer}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage className={css.error} name="name" component="div" />
          </div>
          <div className={css.fieldContainer}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field
              className={css.input}
              type="text"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage className={css.error} name="number" component="div" />
          </div>
          <div className={css.buttonContainer}>
            <button className={css.button} type="submit">
              Add contact
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
