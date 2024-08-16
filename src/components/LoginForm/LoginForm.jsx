import { useId } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './LoginForm.module.css';

const ContactSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email!').required('Required'),
  password: Yup.string()
    .required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
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
      <Form className={css.loginForm}>
        <label htmlFor={emailFieldId} className={css.loginDataLabel}>
          Email
        </label>
        <Field
          type="email"
          name="email"
          id={emailFieldId}
          className={css.loginDataInput}
        />
        <ErrorMessage
          className={css.errorMessage}
          name="email"
          component="span"
        />

        <label htmlFor={passwordFieldId} className={css.loginDataLabel}>
          Password
        </label>
        <Field
          type="text"
          name="password"
          id={passwordFieldId}
          className={css.loginDataInput}
        />
        <ErrorMessage
          className={css.errorMessage}
          name="password"
          component="span"
        />

        <button type="submit" className={css.loginBtn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
