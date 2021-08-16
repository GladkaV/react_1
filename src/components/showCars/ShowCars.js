import ShowCar from "../showCar/ShowCar";
import './ShowCars.css';

export default function ShowCars({cars}) {
    return (
        <ul className={'show-cars'}>
            {
                cars.map(car => <ShowCar key={car.id} car={car} />)
            }
        </ul>
    );
}