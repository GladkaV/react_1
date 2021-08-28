import {url} from "./cars.service";

const deleteCarApi = (id) => {
    return fetch(url + '/' + id, {
        method: 'DELETE',
    })
        .then(response => response.json())
}

export {deleteCarApi};