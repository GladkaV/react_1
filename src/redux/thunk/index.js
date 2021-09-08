import {getMovies} from "../../service/getMovies";
import {
    get_crime,
    get_drama,
    get_fantasy,
    get_genres,
    get_movies,
} from "../action";
import {getGenresMovies} from "../../service/getGenresMovies";

const getMoviesThunk = () => async (dispatch) => {
    let movies = await getMovies();
    dispatch(get_movies(movies.results));

    let genres = await getGenresMovies();
    dispatch(get_genres(genres.genres));

    let crimeMovies = movies.results.filter((movie) => {
        return ~movie.genre_ids.indexOf(genres.genres[4].id);
    });
    dispatch(get_crime(crimeMovies));

    let dramaMovies = movies.results.filter((movie) => {
        return ~movie.genre_ids.indexOf(genres.genres[6].id);
    });
    dispatch(get_drama(dramaMovies));

    let fantasyMovies = movies.results.filter((movie) => {
        return ~movie.genre_ids.indexOf(genres.genres[8].id);
    });
    dispatch(get_fantasy(fantasyMovies));
}

export {getMoviesThunk};