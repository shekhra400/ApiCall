//import Test from './containers/Test'
import React, { useEffect } from "react";
import PrivateRoute from "./components/Common/Private/PrivateRoute";
import PublicRoute from "./components/Common/Public/PublicRoute";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
//import { toggleLoginIn } from "./redux/actions/userAction_toolkit";
import { toggleLoginIn } from "./redux/actions/userAction";
//import { useState } from 'react';
//import UserList from './components/UserList';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Policy from "./containers/Pages/Policy/Policy";
import DisplayPolicy from "./containers/Pages/Policy/DisplayPolicy";
import CreatePolicy from "./containers/Pages/Policy/CreatePolicyForm";
import HomePage from "./containers/Pages/Home/Homepage";
import ContactPage from "./components/Contacts/ContactPage";
import LoginPage from "./containers/Pages/Login/LoginPage";
import ProfilePage from "./containers/Pages/Profile/ProfilePage";
import SignUpPage from "./containers/Login/SignUpPage";
import UserList from "./containers/Pages/UserList/UserListPage";

function App() {
  const dispatch = useDispatch();
  const authToken = localStorage.getItem("token");
  useEffect(
    () => {
      if (authToken !== null) dispatch(toggleLoginIn(true));
      else dispatch(toggleLoginIn(false));
    },
    [authToken, dispatch]
  );

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
          <PrivateRoute exact path="/policy" component={Policy} />
          <PrivateRoute exact path="/addPolicy" component={CreatePolicy} />
          <PrivateRoute exact path="/userList" component={UserList} />
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
