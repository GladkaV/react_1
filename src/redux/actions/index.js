const GET_USERS = 'GET_USERS';

const get_users = (payload) => {
    return {type: GET_USERS, payload}
}
export {GET_USERS, get_users};