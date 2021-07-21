import React from 'react'; 
import { Button } from '@material-ui/core';
import { useSelector , useDispatch } from 'react-redux';
import {loadUsers} from '../actions/userAction'
import UserList from '../components/UserList';

const Test = () => {

    const { list = []} = useSelector(state => {debugger; return state.users});
    const error = useSelector(state => state.users.error);
    const dispatch = useDispatch();
    const onClickHandler = (event) => {
        
    //props.loadUsers();
    dispatch(loadUsers());

    }
    return (
       <React.Fragment>
            <Button variant="contained" color="secondary" size="large"  onClick={onClickHandler}>Load Users</Button>
      {list.length> 0 && <UserList list = {list}/>}
      {error && <h2>{error}</h2>}
      
      
       </React.Fragment>
    )
};

export default Test;
