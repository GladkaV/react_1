import './App.css';
import Header from "./components/header/Header";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from "./components/main/Main";
import SearchError from "./components/search_error/SearchError";
import Footer from "./components/footer/Footer";
import SearchResults from "./components/search_results/SearchResults";
import Movie from "./components/movie/Movie";
import {useSelector} from "react-redux";
import MenuMovies from "./components/menu_movies/MenuMovies";

function App() {
    let {movies, genres} = useSelector(store => {
        let {moviesReducer} = store;
        return moviesReducer;
    })

    return (
        <Router>
            <div className={'app'}>
                <div className={'content'}>
                    <Header/>

                    <Switch>
                        <Route exact path={'/'} render={() => <Main/>}/>

                        <Route path={'/404'} render={() => <SearchError/>}/>

                        <Route path={'/search'} render={(props) => {
                            return <SearchResults {...props}/>
                        }}/>

                        <Route path={'/comedy'} render={() => {
                            let result = movies.filter((movie) => {
                                return ~movie.genre_ids.indexOf(genres[3].id);
                            });

                            return <MenuMovies movies={result}/>
                        }}/>

                        <Route path={'/action'} render={() => {
                            let result = movies.filter((movie) => {
                                return ~movie.genre_ids.indexOf(genres[0].id);
                            });

                            return <MenuMovies movies={result}/>
                        }}/>

                        <Route path={'/thriller'} render={() => {
                            let result = movies.filter((movie) => {
                                return ~movie.genre_ids.indexOf(genres[16].id);
                            });

                            return <MenuMovies movies={result}/>
                        }}/>

                        <Route path={'/:id'} render={(props) => {
                            return <Movie {...props}/>
                        }}/>
                    </Switch>

                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
