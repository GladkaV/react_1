import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MainCarouselItem from "../main_carousel_item/MainCarouselItem";
import './MainCarousel.css';

export default function MainCarousel({slids}) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className={'carousel'}>
            <Slider {...settings}>
                {
                    slids.map(slid => <MainCarouselItem key={slid.id} movie={slid}/>)
                }
            </Slider>
        </div>
    );
}