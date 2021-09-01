import {getUsers} from "../../service/getUsers";
import {get_users} from "../actions";

const getUsersThunk = () => async (dispatch) => {
    let response = await getUsers();
    dispatch(get_users(response));
}

export {getUsersThunk};