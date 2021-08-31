const url = 'https://jsonplaceholder.typicode.com';

const getUsers = () => {
    return fetch(url + '/users')
        .then(response => response.json())
}

export {getUsers, url};