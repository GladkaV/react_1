import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import MainCarousel from "../main_carousel/MainCarousel";
import './Main.css';
import MoviesCarousel from "../movies_carousel/MoviesCarousel";
import {getMoviesThunk} from "../../redux/thunk";

export default function Main() {
    let dispatch = useDispatch();
    let store = useSelector(state => {
        let {moviesReducer} = state;
        return moviesReducer;
    })

    useEffect(() => {
        dispatch(getMoviesThunk());
    }, []);

    return (
        <div className={'main'}>
            <div className={'container'}>
                <div className={'main-slider'}>
                    <MainCarousel slids={store.movies.slice(0, 3)}/>
                </div>

                <div className={'main-block'}>
                    <h3 className={'main-title'}>
                        Crime movies
                    </h3>
                    <MoviesCarousel movies={store.crime}/>
                </div>

                <div className={'main-block'}>
                    <h3 className={'main-title'}>
                        Drama movies
                    </h3>
                    <MoviesCarousel movies={store.drama}/>
                </div>

                <div className={'main-block'}>
                    <h3 className={'main-title'}>
                        Fantasy movies
                    </h3>
                    <MoviesCarousel movies={store.fantasy}/>
                </div>
            </div>
        </div>
    );
}