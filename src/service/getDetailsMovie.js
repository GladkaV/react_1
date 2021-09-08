import {url, key} from "./getMovies";

const getDetailsMovie = (id) => {
    return fetch(url + '/movie/' + id + key)
        .then(res => res.json())
}

export {getDetailsMovie};