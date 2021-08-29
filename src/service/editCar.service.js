import {url} from "./getCars.service";

const editCarService = (id, car) => {
    return fetch(url + '/' + id, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}

export {editCarService};