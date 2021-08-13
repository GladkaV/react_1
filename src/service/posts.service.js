let url = 'https://jsonplaceholder.typicode.com';

const getPosts = () => {
    return  fetch(url + '/posts')
        .then(response => response.json())
}

export {getPosts, url};