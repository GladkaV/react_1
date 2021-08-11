const url = `https://jsonplaceholder.typicode.com/users`;

const getUsers = () => {
    return fetch(url)
        .then(response => response.json())
}

export {getUsers};