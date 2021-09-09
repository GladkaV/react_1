const GET_MOVIES = 'GET_MOVIES';
const GET_GENRES = 'GET_GENRES';
const GET_CRIME = 'GET_CRIME';
const GET_DRAMA = 'GET_DRAMA';
const GET_FANTASY = 'GET_FANTASY';
const CHANGE_THEME = 'CHANGE_THEME';

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

const change_theme = (payload) => {
    return {type: CHANGE_THEME, payload}
}

export {
    GET_MOVIES, get_movies,
    GET_GENRES, get_genres,
    GET_CRIME, get_crime,
    GET_DRAMA, get_drama,
    GET_FANTASY, get_fantasy,
    CHANGE_THEME, change_theme
}