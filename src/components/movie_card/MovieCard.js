import './MovieCard.css';
import MovieImg from "../movie_img/MovieImg";
import StarRatings from "react-star-ratings";
import {Link, withRouter} from 'react-router-dom';

function MovieCard({movie}) {
    return (
        <Link to={{pathname: '/' + movie.id, state: movie}} className={'movie-card'}>

            <div className={'movie-card-img'}>
                <MovieImg src={movie.poster_path} alt={movie}/>
            </div>
            <div className={'movie-card-info'}>
                <p>{movie.title}</p>
                <div className={'movie-card-star'}>
                    <StarRatings
                        starRatedColor="orange"
                        starEmptyColor="darkgrey"
                        numberOfStars={10}
                        rating={movie.vote_average}
                        starDimension="17px"
                        starSpacing="0px"
                    />
                    <div>{movie.vote_average}/10</div>
                </div>
                <div className={'movie-card-date'}>{movie.release_date}</div>
            </div>

        </Link>
    );
}

export default withRouter(MovieCard);