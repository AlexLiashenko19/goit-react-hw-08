import { Field, Form, Formik } from "formik";
import { ErrorMessage } from "formik";
import css from "./ContactForm.module.css"
import * as Yup from "yup";
import { apiAddContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";


const ContactForm = () => {

  const dispatch = useDispatch();

  const onAddContact = (profile) => {
    dispatch(apiAddContact(profile));
  };

  const numberPattern = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?$/;

  const profileValidationSchema = Yup.object().shape({
    profileName: Yup.string().required("Name is required")
    .min(2,  "Name must be at least 2 characters")
    .max(50,  "Name must be no more than 50 characters"),

    profileNumber: Yup.string().required("Number is required")
    .matches(numberPattern, "Invalid phone number"),
  });

  const INITIAL_VALUES = {
    profileName: "",
    profileNumber: "",
  }

  const handleSubmit = (values, actions) => {
    const profileObject = {
      name: values.profileName,
      number:  values.profileNumber,
    }

    onAddContact(profileObject)
		actions.resetForm();
	};

  return (
    <Formik initialValues={INITIAL_VALUES} validationSchema={profileValidationSchema} onSubmit={handleSubmit}>
      <Form action="" className={css.form}>
        <label>
          <span>Name</span>
          <Field type="text" name="profileName" placeholder="Alex Markin" required/>
          <ErrorMessage name="profileName" component="span" />
        </label>
        <label>
          <span>Number</span>
          <Field type="text" name="profileNumber" placeholder="0998561242" required/>
          <ErrorMessage name="profileNumber" component="span" />
        </label>
        <button type="submit">Submit</button>
    </Form>
    </Formik>
  )
}

export default ContactForm
