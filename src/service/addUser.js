import {url} from "./users.service";

const addUser = (user) => {
    return fetch(url + '/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
        .then(res => res.json());
}

export {addUser};