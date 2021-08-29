import {useEffect, useState} from "react";
import {editCarService} from "../../service/editCar.service";
import './CarEdit.css'
import CarError from "../carError/CarError";

export default function CarEdit({car}) {
    let [editCar, setEditCar] = useState({});
    let [err, setErr] = useState(null);

    useEffect(() => {
        setEditCar({...car})
        setErr(null);
    }, [car])

    let onEditCar = (e) => {
        setEditCar({...editCar, [e.target.name] : e.target.value});
    }

    let onSubmit = (e) => {
        e.preventDefault();
        editCarService(car.id, editCar)
            .then(value => console.log(value))
            .catch(() => setErr('Select a car'))
    }

    return (
        <form onSubmit={onSubmit} className={'car-edit'}>
            <label>
                Model:
                <input type="text" name={'model'} value={editCar.model} onChange={onEditCar} required/>
            </label>

            <label>
                Price:
                <input type="number" name={'price'} min={0} value={editCar.price} onChange={onEditCar} required/>
            </label>

            <label>
                Year:
                <input type="number" name={'year'} min={1990} max={2021} value={editCar.year} onChange={onEditCar} required/>
            </label>

            {
                err && <CarError err={err} />
            }

            <button>save</button>
        </form>
    );
}