import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import User from "../user/User";
import {getUsersThunk} from "../../redux/thunk";

export default function Users() {
    let {users} = useSelector(state => {
        let {usersReducer} = state;
        return usersReducer;
    })

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersThunk());
    }, [dispatch]);

    return (
        <ul className={'users'}>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </ul>
    );
}