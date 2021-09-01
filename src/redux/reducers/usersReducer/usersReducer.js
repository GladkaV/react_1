import {GET_USERS} from "../../actions";

export const usersReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: [...action.payload]};
        default:
            return state;
    }
}