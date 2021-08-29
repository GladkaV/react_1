import {useEffect, useState} from "react";
import {getUsers} from "../../service/users.service";
import User from "../user/User";
import {Route} from "react-router-dom";
import UserDetails from "../userDetails/UserDetails";
import './Users.css';

export default function Users(props) {
    let [users, setUsers] = useState([]);
    let {match: {url}} = props;

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);

    return (
        <div>
            <h2>Users</h2>
            <div className={'users'}>
                {
                    users.map(user => <User key={user.id} user={user} url={url}/>)
                }
            </div>
            <Route path={url + '/:id'} render={(props) => {
                return <UserDetails {...props}/>
            }}/>
        </div>
    );
}