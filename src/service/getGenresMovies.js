import {url, key} from "./getMovies";

const getGenresMovies = () => {
    return fetch(url + '/genre/movie/list' + key)
        .then(res => res.json())
}

export {getGenresMovies};