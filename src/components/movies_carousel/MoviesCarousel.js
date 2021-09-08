import Slider from "react-slick";
import MoviesCarouselItem from "../movies_carousel_item/MoviesCarouselItem";
import './MoviesCarousel.css';

export default function MoviesCarousel({movies}) {
    const settings = {
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className={'movies-carousel'}>
            <Slider {...settings}>
                {
                    movies.map(movie => <MoviesCarouselItem key={movie.id} movie={movie}/>)
                }
            </Slider>
        </div>
    );
}