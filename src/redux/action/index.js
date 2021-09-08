const GET_MOVIES = 'GET_MOVIES';
const GET_GENRES = 'GET_GENRES';
const GET_CRIME = 'GET_CRIME';
const GET_DRAMA = 'GET_DRAMA';
const GET_FANTASY = 'GET_FANTASY';

const get_movies = (payload) => {
    return {type: GET_MOVIES, payload}
}

const get_genres = (payload) => {
    return {type: GET_GENRES, payload}
}

const get_crime = (payload) => {
    return {type: GET_CRIME, payload}
}

const get_drama = (payload) => {
    return {type: GET_DRAMA, payload}
}

const get_fantasy = (payload) => {
    return {type: GET_FANTASY, payload}
}

export {
    GET_MOVIES, get_movies,
    GET_GENRES, get_genres,
    GET_CRIME, get_crime,
    GET_DRAMA, get_drama,
    GET_FANTASY, get_fantasy,
}