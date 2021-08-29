import {url} from "./getCars.service";

const addCarService = (car) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
}

export {addCarService};