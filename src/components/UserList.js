const UserList = (props) => {

    return (
       <ul>
           {
                props.data.map((user) => (
                    <li>{user.name}</li>
                ))
           }
       </ul>
    )
}

export default UserList;