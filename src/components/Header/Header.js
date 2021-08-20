import React from "react";
import { useSelector, useDispatch } from "react-redux";
//import { userLogout } from "../../redux/actions/userAction";
import { userLogout } from "../../redux/actions/userAction_toolkit";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { useHistory } from "react-router";

const Header = () => {
  const userIsLoggedIn = useSelector((state) => state.users.isLoggedIn);
  //const authToken = localStorage.getItem("token");
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutHandler = () => {
    dispatch(userLogout());
    history.push("/login");
  };
  return (
    <div className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React AuthSite</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          {!userIsLoggedIn && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {!userIsLoggedIn && (
            <li>
              <Link to="/signUp">SignUp</Link>
            </li>
          )}
          {userIsLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {userIsLoggedIn && (
            <li>
              <Link to="/userList">UserList</Link>
            </li>
          )}
          {userIsLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};
export default Header;
