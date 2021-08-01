//import Test from './containers/Test'
import React, { useEffect } from "react";
import PrivateRoute from "./components/Common/Private/PrivateRoute";
import PublicRoute from "./components/Common/Public/PublicRoute";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import { toggleLoginIn } from "./actions/userAction";
//import { useState } from 'react';
//import UserList from './components/UserList';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./containers/Pages/Home/Homepage";
import ContactPage from "./components/Contacts/ContactPage";
import LoginPage from "./containers/Pages/Login/LoginPage";
import ProfilePage from "./containers/Pages/Profile/ProfilePage";
import SignUpPage from "./containers/Login/SignUpPage";

function App() {
  //const [users, setUsers] = useState([]);
  // const loadUserList = async() => {

  //   const response = await fetch('https://loadusers-default-rtdb.firebaseio.com/user.json');
  //   const responseData = await response.json();

  //   const loadedUsers = [];

  //   for ( const key in responseData){

  //     loadedUsers.push({
  //       id: key,
  //       name : responseData[key].name
  //     })
  //   }

  //       setUsers(loadedUsers);
  // }
  const dispatch = useDispatch();
  const authToken = localStorage.getItem("token");
  useEffect(() => {
    if (authToken !== null) dispatch(toggleLoginIn(true));
    else dispatch(toggleLoginIn(false));
  }, [authToken, dispatch]);

  return (
    <React.Fragment>
      <Header />
      <section className="main-container">
        <Switch>
          <PublicRoute exact path="/" component={HomePage} />
          <PublicRoute exact path="/contact" component={ContactPage} />
          <PublicRoute exact path="/signUp" component={SignUpPage} />
          <PublicRoute exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/profile" component={ProfilePage} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </section>
      <Footer />
    </React.Fragment>
  );
}

//  <Test loadUsers ={loadUserList}/>
// <UserList data={users}/>
export default App;
