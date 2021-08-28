const urlUsers = 'https://jsonplaceholder.typicode.com';

const getUsers = () => {
    return fetch(urlUsers + '/users')
        .then(response => response.json())
}

export {getUsers, urlUsers};