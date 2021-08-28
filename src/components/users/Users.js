import {useEffect, useState} from "react";
import {getUsers} from "../../service/users.service";
import User from "../user/User";
import './Users.css';

export default function Users({getId}) {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);

    let userCheck = (e) => {
        getId(e.target.value)
    }

    return (
        <form className={'form-users'}>
            <h2>Select user</h2>
            <select onChange={userCheck}>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </select>
        </form>
    );
}