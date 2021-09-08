import MovieImg from "../movie_img/MovieImg";
import './MoviesCarouselItem.css';
import StarRatings from "react-star-ratings";
import { Link } from 'react-router-dom';

export default function MoviesCarouselItem({movie}) {
    // console.log(movie)

    return (
        <Link to={{pathname: '/' + movie.id, state: movie}} className={'movie-carousel-item'}>
            <div className={'movie-carousel-item-img'}>
                <MovieImg src={movie.poster_path} alt={'movie'}/>
            </div>
            <div className={'movie-carousel-star'}>
                <StarRatings
                    starRatedColor="orange"
                    starEmptyColor="darkgrey"
                    numberOfStars={10}
                    rating={movie.vote_average}
                    starDimension="15px"
                    starSpacing="0px"
                />
                <div>{movie.vote_average}/10</div>
            </div>
            <div className={'movie-carousel-title'}>{movie.title}</div>
        </Link>
    );
}