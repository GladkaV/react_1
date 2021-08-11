import './Users.css';
import {useEffect, useState} from "react";
import {getUsers} from "../../service/user.service";
import User from "../user/User";
import {getAxiosUsers} from "../../service/user.service.axios";

export default function Users() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        // getUsers().then(value => setUsers([...value]));
        getAxiosUsers().then(({data}) => setUsers([...data]));
    }, []);

    return (
        <ol className={'users'}>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </ol>
    );
}