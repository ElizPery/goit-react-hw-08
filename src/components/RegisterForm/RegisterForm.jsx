import { useId } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './RegisterForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    email: Yup.string().email('Must be a valid email!').required('Required'),
  password: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
    name: '',
    email: '',
    password: '',
};

const RegisterForm = () => {
  const nameFieldId = useId();
    const emailFieldId = useId();
    const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    // handleAddContact(values.name, values.number);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.registerForm}>
        <label htmlFor={nameFieldId} className={css.registerDataLabel}>
          Username
        </label>
        <Field
          type="text"
          name="name"
          id={nameFieldId}
          className={css.registerDataInput}
        />
        <ErrorMessage
          className={css.errorMessage}
          name="name"
          component="span"
        />

        <label htmlFor={emailFieldId} className={css.registerDataLabel}>
          Email
        </label>
        <Field
          type="email"
          name="email"
          id={emailFieldId}
          className={css.registerDataInput}
        />
        <ErrorMessage
          className={css.errorMessage}
          name="email"
          component="span"
        />

        <label htmlFor={passwordFieldId} className={css.registerDataLabel}>
          Password
        </label>
        <Field
          type="text"
          name="password"
          id={passwordFieldId}
          className={css.registerDataInput}
        />
        <ErrorMessage
          className={css.errorMessage}
          name="password"
          component="span"
        />

        <button type="submit" className={css.registerBtn}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
