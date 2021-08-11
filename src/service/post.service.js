const url = `https://jsonplaceholder.typicode.com/posts`;

const getPosts = () => {
    return fetch(url)
        .then(response => response.json())
}

export {getPosts};