import React from 'react'; 
import { Button } from '@material-ui/core';

const Test = (props) => {

    const clickHandler = (event) => {
        
    props.loadUsers();


    }
    return (
        <Button variant="contained" color="secondary" size="large"  onClick={clickHandler}>Load Users</Button>
    )
};

export default Test;
