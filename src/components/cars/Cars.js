import ShowCars from "../showCars/ShowCars";
import FormAddCar from "../formAddCar/FormAddCar";
import {useEffect, useState} from "react";
import {getCars} from "../../service/cars.service";
import './Cars.css';

export default function Cars() {
    let [cars, setCars] = useState([]);

    useEffect(() => {
        getCars().then(value => setCars([...value]));
    }, []);

    let onClick = () => {
        getCars().then(value => setCars([...value]));
    }

    return (
        <div>
            <h2>Show cars</h2>
            <ShowCars cars={cars.slice(0, 15)}/>

            <div className={'wrap-cars'}>
                <div>
                    <h3>Add car</h3>
                    <FormAddCar />
                </div>
                <div>
                    <h3>last five cars</h3>
                    <div className={'wrap-last-cars'}>
                        <ShowCars cars={cars.slice(-5)}/>
                        <button className={'btn-update'} onClick={onClick}>update</button>
                    </div>
                </div>
            </div>
        </div>
    );
}