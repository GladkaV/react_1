import './SearchResults.css';
import MovieCard from "../movie_card/MovieCard";
import Pagination from "../pagination/Pagination";

export default function SearchResults({location: {state}}) {

    return (
        <div className={'search-results'}>
            <div className={'container'}>
                <h2 className={'search-results-title'}>
                    Search result on request: "{state.request}"
                </h2>

                <Pagination
                    data={state.movies}
                    RenderComponent={MovieCard}
                    pageLimit={2}
                    dataLimit={5}
                />
            </div>
        </div>
    );
}