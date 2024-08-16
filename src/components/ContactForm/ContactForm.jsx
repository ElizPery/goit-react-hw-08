import { useSelector, useDispatch } from 'react-redux';
import { useId } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();


  const handleAddContact = (name, number) => {
    if (
      contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() === name.toLocaleLowerCase() ||
          contact.number === number
      )
    ) {
      Notify.warning(`${name} or ${number} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
  };

  const handleSubmit = (values, actions) => {
  
    handleAddContact(values.name, values.number);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.contactForm}>
        <label htmlFor={nameFieldId} className={css.contactInputData}>
          Name
        </label>
        <Field
          type="text"
          name="name"
          id={nameFieldId}
          className={css.contactInputItem}
          autocomplete="off"
        />
        <ErrorMessage
          className={css.errorMessage}
          name="name"
          component="span"
        />

        <label htmlFor={numberFieldId} className={css.contactInputData}>
          Number
        </label>
        <Field
          type="tel"
          name="number"
          id={numberFieldId}
          className={css.contactInputItem}
        />
        <ErrorMessage
          className={css.errorMessage}
          name="number"
          component="span"
        />

        <button type="submit" className={css.submitNewContact}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;