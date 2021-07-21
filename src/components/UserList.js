const UserList = (props) => {

    return (
       <ul>
           {
                props.list.map((user) => (
                    <li>{user.name}</li>
                ))
           }
       </ul>
    )
}

export default UserList;