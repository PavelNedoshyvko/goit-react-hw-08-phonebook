import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authOperations';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required('Required!'),
  password: Yup.string().required('Required!'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Log In</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          dispatch(logIn(values));
          actions.resetForm();
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="jane@acme.com" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            placeholder="password"
            type="password"
          />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Log In</button>
        </Form>
      </Formik>
      <Toaster />
    </div>
  );
};
