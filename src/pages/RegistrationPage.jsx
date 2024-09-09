import { Field, Form, Formik } from "formik";
import { ErrorMessage } from "formik";
import css from "../components/ContactForm/ContactForm"
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { apiRegister } from "../redux/auth/operations";
import { selectAuthError } from "../redux/auth/selectors";

const RegistrationPage = () => {

  const dispatch = useDispatch();
  const error = useSelector(selectAuthError)

  const registerValidationSchema = Yup.object().shape({
    name: Yup.string()
    .required("Name is required")
    .min(2,  "Name must be at least 2 characters")
    .max(100,  "Name must be no more than 100 characters"),

    email: Yup.string()
    .email("Invalid email, can you try again")
    .required("Email is required"),

    password: Yup.string().required("Password is required")
    .min(7,  "Password must be at least 7 characters")
    .max(50,  "Password must be no more than 50 characters"),
  });

  const INITIAL_VALUES = {
    name: "",
    email: "",
    password: "",
  }

  const handleSubmit = (formData) => {
    dispatch(apiRegister(formData))
	};

  return (
    <Formik initialValues={INITIAL_VALUES}
    validationSchema={registerValidationSchema}
    onSubmit={handleSubmit} >
      <Form action="" className={css.form}>
        <label>
          <span>Name</span>
          <Field type="text" name="name" placeholder="Alex Markin" required/>
          <ErrorMessage name="name" component="span" />
        </label>
        <label>
          <span>Email</span>
          <Field type="email" name="email" placeholder="SlexiMarkin@gmail.com" required/>
          <ErrorMessage name="email" component="span" />
        </label>
        <label>
          <span>Password</span>
          <Field type="password" name="password" placeholder="0sdfcscx342_Ikcvd" required/>
          <ErrorMessage name="password" component="span" />
        </label>
        <button type="submit">Submit</button>
        {error  && <p style={{ color: "red" }}>Oppps, some  error occurred....</p>}
    </Form>
    </Formik>
  )
}

export default RegistrationPage