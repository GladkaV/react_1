import './App.css';
import Users from "./components/users/Users";
import {useDispatch} from "react-redux";
import {getUsers} from "./service/users.service";
import UserAdd from "./components/userAdd/UserAdd";
import {clear_Users, get_Users} from "./redux/actions";

function App() {
    let dispatch = useDispatch();

    let onClickClearUsers = () => {
        dispatch(clear_Users())
    };
    let onClickShowUsers = () => {
        getUsers().then(value => {
            dispatch(get_Users(value))
        })
    };
    return (
        <div className={'app'}>
            <UserAdd/>
            <div className={'btns'}>
                <button onClick={onClickClearUsers}>Clear users</button>
                <button onClick={onClickShowUsers}>Show users</button>
            </div>
            <Users/>
        </div>
    );
}

export default App;
