import {
    CHANGE_THEME,
    GET_CRIME,
    GET_DRAMA,
    GET_FANTASY,
    GET_GENRES,
    GET_MOVIES,
} from "../action";

let initialState = {
    movies: [],
    genres: [],
    crime: [],
    drama: [],
    fantasy: [],
    theme: false,
}
export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {...state, movies: [...action.payload]};
        case GET_GENRES:
            return {...state, genres: [...action.payload]};
        case GET_CRIME:
            return {...state, crime: [...action.payload]};
        case GET_DRAMA:
            return {...state, drama: [...action.payload]};
        case GET_FANTASY:
            return {...state, fantasy: [...action.payload]};
        case CHANGE_THEME:
            return {...state, theme: action.payload};
        default:
            return state;
    }
}