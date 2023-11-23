import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authOperations';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required!'),
  email: Yup.string().email().required('Required!'),
  password: Yup.string().required('Required!'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Sign Up</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, actions) => {
          dispatch(register(values));
          actions.resetForm();
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Jane" />
          <ErrorMessage name="name" component="div" />

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
          <button type="submit">Register</button>
        </Form>
      </Formik>
      <Toaster />
    </div>
  );
};
