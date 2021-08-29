import './Car.css';

export default function Car({car}) {
    return (
        <div className={'car'}>
          <span>{car.model}</span> - <span>{car.year}</span> year
          <div className={'car-price'}>{car.price}$</div>
        </div>
    );
}