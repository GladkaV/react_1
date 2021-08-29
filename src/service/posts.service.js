import {url} from "./users.service";

const getPosts = () => {
    return  fetch(url + '/posts')
        .then(response => response.json())
}

export {getPosts};