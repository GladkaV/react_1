import {addUser} from "../../service/addUser";
import {useDispatch} from "react-redux";
import {add_Users} from "../../redux/actions";

export default function UserAdd() {
    let dispatch = useDispatch();

    let onSubmit = (e) => {
        e.preventDefault();
        let name = e.target.user.value;

        addUser({name}).then(value => {
            dispatch(add_Users(value))
        });
    }

    return (
        <div>
            <h2>add user</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name={'user'}/>
                <button>add user</button>
            </form>
        </div>
    );
}