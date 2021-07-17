import Test from './components/Test'
import './App.css';
import { useState } from 'react';
import UserList from './components/UserList';

function App() {

  const [users, setUsers] = useState([]);
  const loadUserList = async() => {    

    const response = await fetch('https://loadusers-default-rtdb.firebaseio.com/user.json');
    const responseData = await response.json();

    const loadedUsers = [];

    for ( const key in responseData){

      loadedUsers.push({
        id: key,
        name : responseData[key].name
      })
    }

        setUsers(loadedUsers);
  }

  return (
    <div className="App">
      <header className="App-header">
      <Test loadUsers ={loadUserList}/>
      <UserList data={users}/>
      </header>
    </div>
  );
}

export default App;
