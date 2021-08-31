import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../../service/users.service";
import User from "../user/User";
import {get_Users} from "../../redux/actions";

export default function Users() {
    let {users} = useSelector(state => {
        let {rootReducer} = state;
        return rootReducer;
    });

    let dispatch = useDispatch();

    useEffect(() => {
        getUsers().then(value => {
            dispatch(get_Users(value));
        })
    }, []);

    return (
        <ul className={'users'}>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </ul>
    );
}