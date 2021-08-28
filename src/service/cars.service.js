let url = 'http://91.201.233.14//api/v1/cars';

const getCars = () => {
    return fetch(url)
        .then(response => response.json())
}

export {getCars, url};