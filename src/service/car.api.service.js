import {url} from "./cars.service";

const addCar = (car) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
        .then(json => console.log(json));
}

export {addCar};