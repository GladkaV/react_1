import {useEffect, useState} from "react";
import {getCars} from "../../service/getCars.service";
import CarOption from "../carOption/CarOption";
import './CarSelect.css';

export default function CarSelect({editCar}) {
    let [cars, setCars] = useState([]);

    useEffect(() => {
        getCars().then(value => setCars([...value]));
    }, []);

    let carCheck = (e) => {
        editCar(e.target.value)
    }

    return (
        <form className={'car-select'}>
            <select defaultValue={'default'} onChange={carCheck}>
                <option value={'default'} disabled>Select a car</option>
                {
                    cars.map(car => <CarOption key={car.id} car={car}/>)
                }
            </select>
        </form>
    );
}