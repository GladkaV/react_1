import {url} from "./users.service";

const getPosts = (id) => {
    return  fetch(url + '/users/' + id + '/posts')
        .then(response => response.json())
}

export {getPosts};