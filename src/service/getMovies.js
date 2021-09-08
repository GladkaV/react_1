const url = 'https://api.themoviedb.org/3';
const key = '?api_key=07d86883538f9e08401f39efbd58c988';

const getMovies = () => {
    return fetch(url + '/movie/top_rated' + key)
        .then(res => res.json())
}

export {getMovies, url, key};