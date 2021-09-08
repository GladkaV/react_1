import {key, url} from "./getMovies";

const getSearchMovie = (text) => {
    return fetch(url + '/search/movie' + key + '&query=' + text)
        .then(res => res.json())
}

export {getSearchMovie};