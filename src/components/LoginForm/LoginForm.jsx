import { Field, Form, Formik } from "formik";
import { ErrorMessage } from "formik";
import css from "../ContactForm/ContactForm"
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { apiLogin } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";

const LoginForm = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectAuthError)
  
    const loginValidationSchema = Yup.object().shape({
  
      email: Yup.string()
      .email("Invalid email, can you try again")
      .required("Email is required"),
  
      password: Yup.string().required("Password is required")
      .min(7,  "Password must be at least 7 characters")
      .max(50,  "Password must be no more than 50 characters"),
    });
  
    const INITIAL_VALUES = {
      email: "",
      password: "",
    }
  
    const handleSubmit = (formData) => {
      dispatch(apiLogin(formData))
      };
  return (
    <Formik initialValues={INITIAL_VALUES}
    validationSchema={loginValidationSchema}
    onSubmit={handleSubmit} >
      <Form action="" className={css.form}>
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

export default LoginForm
