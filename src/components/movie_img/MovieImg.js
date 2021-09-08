import {Fragment} from "react";

export default function MovieImg({src, alt}) {
    const path = 'https://image.tmdb.org/t/p/original';

    return (
        <Fragment>
            <img src={path + src} alt={alt}/>
        </Fragment>
    );
}