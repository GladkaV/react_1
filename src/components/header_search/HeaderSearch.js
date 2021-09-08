import './HeaderSearch.css';
import {getSearchMovie} from "../../service/getSearch";
import {useState} from "react";
import {withRouter} from 'react-router-dom';

function HeaderSearch({history}) {
    let [search, setSearch] = useState('');

    const onchange = ({target: {value}}) => {
        setSearch(value);
    }

    const onsubmitSearch = (e) => {
        e.preventDefault();

        if (!search) return;

        let searchText = e.target.search.value.trim().replace(/ +/g, '+');

        getSearchMovie(searchText).then(value => {
            if (value.results.length > 0) {
                history.push({
                    pathname: '/search',
                    state: {
                        movies: value.results,
                        request: searchText,
                    }
                });
            } else {
                history.push('/404');
            }
        });
    }

    return (
        <form className={'header_search'} onSubmit={onsubmitSearch}>
            <input type="text" name={'search'} onChange={onchange} value={search} placeholder={'Search movie'}/>
            <button disabled={!search}></button>
        </form>
    );
}

export default withRouter(HeaderSearch);