import { reduxForm, Field } from "redux-form";
//import { TextField, RadioGroup, RadioButton } from "redux-form-material-ui";
import { TextField } from "@material-ui/core";
//import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";

const validate = (value) => {
  const error = {};
  const requiredFields = ["firstName", "lastName", "email"];
  requiredFields.forEach((field) => {
    if (!value[field]) {
      error[field] = "Required";
    }
  });

  if (
    value.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)
  ) {
    error.email = "Invalid email address";
  }
  return error;
};

// customizing a textfield  or function connecting redux form with material ui component
const renderTextField = ({ input, label, meta: { touched, error } }) => (
  <TextField
    label={label}
    helperText={touched && error}
    {...input}
    error={touched && error}
  />
);

const SignUpPage = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="firstName"
          component={renderTextField}
          label="First Name"
        />
      </div>
      <div>
        <Field name="lastName" component={renderTextField} label="Last Name" />
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email" />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "SignUpPage",
  validate, // a unique identifier for this form
})(SignUpPage);
