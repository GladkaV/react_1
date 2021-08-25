import {url} from "./users.service";

const getComments = () => {
    return fetch(url + '/comments')
        .then(response => response.json())
}

export {getComments};