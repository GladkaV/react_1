import {url} from "./posts.service";

const getComments = (id) => {
    return  fetch(url + '/posts/' + id + '/comments')
        .then(response => response.json())
}

export {getComments};