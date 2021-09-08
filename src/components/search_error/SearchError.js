import error from "../../assets/img/error.svg";
import './SearchError.css';

export default function SearchError() {
    return (
        <div className={'search-error'}>
            <div className={'container'}>
                <p className={'search-error-text'}>Sorry!
                    <span>No results were found</span>
                </p>
                <div className={'search-error-img'}>
                    <img src={error} alt="error"/>
                </div>
            </div>
        </div>
    );
}