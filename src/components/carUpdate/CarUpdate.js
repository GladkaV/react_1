import CarSelect from "../carSelect/CarSelect";
import CarEdit from "../carEdit/CarEdit";
import {useState} from "react";
import './CarUpdate.css';

export default function CarUpdate() {
    let [car, setCar] = useState({});

    let editCar = (car) => {
        setCar({...JSON.parse(car)})
    }

    return (
        <div className={'car-update'}>
            <CarSelect editCar={editCar}/>
            <CarEdit car={car}/>
        </div>
    );
}