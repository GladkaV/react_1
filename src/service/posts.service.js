import {urlUsers} from "./users.service";

const getPosts = (id) => {
    return fetch(urlUsers + '/users/' + id + '/posts')
        .then(response => response.json())
}

export {getPosts};