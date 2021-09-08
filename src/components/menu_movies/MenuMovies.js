import MovieCard from "../movie_card/MovieCard";
import './MenuMovies.css';

export default function MenuMovies({movies}) {
    return (
        <div className={'menu-movies'}>
            {
                movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
            }
        </div>
    );
}