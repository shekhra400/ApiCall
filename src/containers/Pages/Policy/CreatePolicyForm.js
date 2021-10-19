import classes from "./CreatePolicyForm.module.css";
import DisplayPolicy from "./DisplayPolicy";
import { useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createPolicy,
  togglePolicyCreated
} from "../../../redux/actions/policyAction";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Alert } from "@material-ui/lab";
import {
  selectPolicyDataIsLoading,
  selectPolicyDataIsError,
  selectPolicyData,
  selectIsPolicyCreated
} from "../../../redux/selectors/policy.selector";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px"
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2)
    }
  }
}));

const CreatePolicy = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector(state => state);
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredFirstName, setEnteredFirstName] = useState();
  const [enteredLastName, setEnteredLastName] = useState();
  const [enteredDOB, setEnteredDOB] = useState(new Date());
  const [enteredPolicyName, setEnteredPolicyName] = useState();
  const [isPolicyCreated, setIsPolicyCreated] = useState(false);
  const isPolicyCreatedFlag = selectIsPolicyCreated(state);

  useEffect(
    function() {
      setIsPolicyCreated(isPolicyCreatedFlag);
    },
    [isPolicyCreatedFlag]
  );

  const displayPolicyHandler = () => {
    history.push("/policy");
    setIsPolicyCreated(false);
    dispatch(togglePolicyCreated(false));
  };

  const policyInputHandler = event => {
    setEnteredPolicyName(event.target.value);
  };

  const firstNameInputHandler = event => {
    setEnteredFirstName(event.target.value);
  };
  const lastNameInputHandler = event => {
    setEnteredLastName(event.target.value);
  };

  const emailInputHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    const name = enteredFirstName + " " + enteredLastName;
    dispatch(createPolicy(name, enteredPolicyName, enteredDOB));
  };

  return (
    <div className={classes.main}>
      <h2>Policy form</h2>
      {selectPolicyDataIsLoading(state) && <CircularProgress size={50} />}
      {isPolicyCreated && (
        <div>
          <div className={classes.backdrop} />;
          <div className={classes.modal}>
            <Alert>
              <h2>Policy Saved</h2>
              <button className={classes.btn} onClick={displayPolicyHandler}>
                OK
              </button>
            </Alert>
          </div>
        </div>
      )}
      {selectPolicyData(state) && (
        <form className={classes.control} onSubmit={submitHandler}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Policy</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              onChange={policyInputHandler}
            >
              <MenuItem value="Life">Life</MenuItem>
              <MenuItem value="Term">Term</MenuItem>
              <MenuItem value="health">Health</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="firstName"
            variant="filled"
            label="First Name"
            required
            onChange={firstNameInputHandler}
          />

          <TextField
            name="lastName"
            variant="filled"
            label="Last Name"
            required
            onChange={lastNameInputHandler}
          />

          <TextField
            label="Email"
            variant="filled"
            type="email"
            required
            onChange={emailInputHandler}
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              clearable
              value={enteredDOB}
              placeholder="10/10/2018"
              onChange={date => setEnteredDOB(date)}
              // minDate={new Date()}
              format="MM/dd/yyyy"
            />
          </MuiPickersUtilsProvider>
          <button type="submit" className={classes.btn}>
            Add
          </button>
        </form>
      )}
    </div>
  );
};

export default CreatePolicy;
