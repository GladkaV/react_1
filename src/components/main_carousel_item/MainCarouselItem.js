import MovieImg from "../movie_img/MovieImg";

export default function MainCarouselItem({movie}) {
    return (
        <div className={'carousel-item'}>
            <div className={'carousel-img'}>
                <MovieImg src={movie.backdrop_path} alt={'movie'}/>
            </div>
            <div className={'carousel-title'}>
                {movie.title}
            </div>
        </div>
    );
}