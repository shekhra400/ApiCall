import axios from 'axios';

export const LOAD_USERS = 'LOAD_USERS'
export const LOAD_ERROR = 'LOAD_ERROR'
export const loadUsers = () => {

    return async (dispatch) => {

       // const loadUserList = async() => {    
        //dispatch(addUserStarted(true))

              /*  const response = await fetch('https://loadusers-default-rtdb.firebaseio.com/user.json');
               const responseData = await response.json();
          
               const loadedUsers = [];
          
               for ( const key in responseData){
          
                 loadedUsers.push({
                   id: key,
                   name : responseData[key].name
                 })
               }
               dispatch(addUserSuccess(loadedUsers)) */

               axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const loadedUsers = [];
          
        for ( const key in res.data){
   
          loadedUsers.push({
            id: key,
            name : res.data[key].name
          })
        }
        dispatch(addUserSuccess(loadedUsers))
      }).catch(err =>{
        dispatch(addUserFailure(err.message))
      })
      }

    //}      
};

const addUserSuccess = payload => ({
    type: LOAD_USERS,
    payload
  });

  const addUserFailure = payload => ({
    type: LOAD_ERROR,
    payload
  });
