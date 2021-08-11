let url = 'https://jsonplaceholder.typicode.com/comments';

const getComments = () => {
    return fetch(url)
        .then(response => response.json())
}

export {getComments};