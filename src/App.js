//import Test from './containers/Test'
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
//import { useState } from 'react';
//import UserList from './components/UserList';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./containers/Pages/Home/Homepage";
import ContactPage from "./components/Contacts/ContactPage";
import LoginPage from "./containers/Pages/Login/LoginPage";
import ProfilePage from "./containers/Pages/Profile/ProfilePage";

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

  const userIsLoggedIn = useSelector((state) => state.users.isLoggedIn);
  //const authToken = localStorage.getItem("token");

  return (
    <React.Fragment>
      <Header />
      <section className="main-container">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
          {!userIsLoggedIn && (
            <Route path="/login" exact>
              <LoginPage />
            </Route>
          )}
          {userIsLoggedIn && (
            <Route path="/profile" exact>
              <ProfilePage />
            </Route>
          )}
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
