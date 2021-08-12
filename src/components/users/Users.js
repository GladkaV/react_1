import './Users.css';
import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../../service/users.service";

export default function Users() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

    return (
        <div className={'users'}>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
}