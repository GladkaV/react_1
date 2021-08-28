import {useEffect, useState} from "react";
import {getCars} from "../../service/cars.service";
import Car from "../car/Car";
import {deleteCarApi} from "../../service/deleteCar.api";
import FormCar from "../formCar/FormCar";
import './Cars.css';

export default function Cars() {
    let [cars, setCars] = useState([]);
    let [car, setCar] = useState({});

    useEffect(() => {
        getCars().then(value => setCars([...value]));
    }, []);

    let deleteCar = (id) => {
        let filterCars = cars.filter(car => car.id !== id);
        setCars([...filterCars]);
        deleteCarApi(id).then(value => console.log(value));
    }

    let editCar = (car) => {
        setCar({...car});
    }

    let showAllCar = () => {
        getCars().then(value => setCars([...value]));
    }

    let showEditCar = (id, newCar) => {
        let filterCars = cars.map(car => {
            if(car.id === id) {
                return newCar;
            }
            return car;
        })
        setCars([...filterCars]);
    }

    return (
        <div>
            <h2>Edit car</h2>
            <FormCar car={car} showEditCar={showEditCar} showAllCar={showAllCar}/>

            <div className={'cars'}>
                {
                    cars.map(car => <Car
                        key={car.id}
                        car={car}
                        editCar={editCar}
                        deleteCar={deleteCar}/>
                    )
                }
            </div>
        </div>
    );
}