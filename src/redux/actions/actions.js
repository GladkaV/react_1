import {ADD_USER, CLEAR_USERS, FETCH_USERS} from "./actionTypes";

const get_Users = (value) => {
    return {type: FETCH_USERS, payload: value}
}

const clear_Users = (value) => {
    return {type: CLEAR_USERS}
}

const add_Users = (value) => {
    return {type: ADD_USER, payload: value}
}

export {get_Users, clear_Users, add_Users};