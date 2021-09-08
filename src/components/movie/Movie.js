import {useEffect, useState} from "react";
import {getDetailsMovie} from "../../service/getDetailsMovie";
import MovieImg from "../movie_img/MovieImg";
import StarRatings from "react-star-ratings";
import './Movie.css';

export default function Movie({location: {state}}) {
    let [details, setDetails] = useState({});
    let productionCompanies = details.production_companies;
    let genres = details.genres;

    useEffect(() => {
        getDetailsMovie(state.id).then(value => setDetails(value))
    })

    return (
        <div className={'movie'}>
            <div className={'container'}>
                <div className={'movie-info'}>
                    <div className={'movie-info-img'}>
                        <MovieImg src={details.poster_path} alt={details.title}/>
                    </div>
                    <div className={'movie-info-box'}>
                        <h1>{details.title}</h1>
                        <div className={'movie-info-star'}>
                            <StarRatings
                                starRatedColor="orange"
                                starEmptyColor="darkgrey"
                                numberOfStars={10}
                                rating={details.vote_average}
                                starDimension="15px"
                                starSpacing="0px"
                            />
                            <div>{details.vote_average}/10</div>
                        </div>
                        <div className={'movie-info-about'}>
                            <span>Genre:</span>
                            <ul>
                                {
                                    !genres || genres.map(item => {
                                        return <li key={item.id}>{item.name}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className={'movie-info-descr'}>
                            <span>Overview:</span> {details.overview}
                        </div>
                        <div className={'movie-info-about'}>
                            <span>Budget:</span> {details.budget}
                        </div>
                        <div className={'movie-info-about'}>
                            <span>Original language:</span> {details.original_language}
                        </div>
                        <div className={'movie-info-about'}>
                            <span>Original title:</span> {details.original_title}
                        </div>
                        <div className={'movie-info-about'}>
                            <span>Popularity:</span> {details.popularity}
                        </div>
                        <div className={'movie-info-about'}>
                            <span>Release date:</span> {details.release_date}
                        </div>
                        <div className={'movie-info-about'}>
                            <span>Revenue:</span> {details.revenue}
                        </div>
                        <div className={'movie-info-about'}>
                            <span>Status:</span> {details.status}
                        </div>
                    </div>
                </div>
                <div className={'movie-frame'}>
                    <MovieImg src={details.backdrop_path} als={'movie frame'}/>
                </div>
                <div className={'container'}>
                    <span className={'movie-list-title'}>Production companies:</span>
                    <ul className={'movie-list'}>
                        {
                            !productionCompanies || productionCompanies.map(item => {
                                return <li key={item.id}>
                                    <div className={'movie-list-img'}>
                                        <MovieImg src={item.logo_path} alt={'logo movie'}/>
                                    </div>
                                    <span>{item.name}</span>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}