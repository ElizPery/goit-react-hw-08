import { useId } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './RegisterForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    email: Yup.string().email('Must be a valid email!').required('Required'),
  password: Yup.string()
    .min(7, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
    name: "",
    email: "",
    password: "",
};

const RegisterForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.registerForm} autoComplete="off">
        <label htmlFor={nameFieldId} className={css.registerDataLabel}>
          Username
        </label>
        <Field
          type="text"
          name="name"
          id={nameFieldId}
          className={css.registerDataInput}
          autoComplete="off"
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
          autoComplete="off"
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
          type="password"
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
