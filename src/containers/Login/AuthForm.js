import { useRef, useState } from "react";
import classes from "./AuthForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "../../actions/userAction";
import CircularProgress from "@material-ui/core/CircularProgress";

const AuthForm = () => {
  //const error = useSelector((state) => state.login.error);
  //const authToken = useSelector((state) => state.login.token);
  const dispatch = useDispatch();
  const enteredEmailRef = useRef();
  const enteredPasswordRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const isLoading = useSelector((state) => state.users.isLoading);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = enteredEmailRef.current.value;
    const enteredPassword = enteredPasswordRef.current.value;
    dispatch(authenticateUser(enteredEmail, enteredPassword));
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={enteredEmailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={enteredPasswordRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <CircularProgress size={20} />}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
