import {useEffect, useState} from "react";
import {editCarService} from "../../service/editCar.service";
import './CarEdit.css'

export default function CarEdit({car}) {
    let [editCar, setEditCar] = useState({});

    useEffect(() => {
        setEditCar({...car})
    }, [car])

    let onEditCar = (e) => {
        setEditCar({...editCar, [e.target.name] : e.target.value});
    }

    let onSubmit = (e) => {
        e.preventDefault();
        editCarService(car.id, editCar).then(value => console.log(value));
    }

    return (
        <form onSubmit={onSubmit} className={'car-edit'}>
            <label>
                Model:
                <input type="text" name={'model'} value={editCar.model} onChange={onEditCar} required/>
            </label>

            <label>
                Price:
                <input type="number" name={'price'} value={editCar.price} onChange={onEditCar} required/>
            </label>

            <label>
                Year:
                <input type="number" name={'year'} value={editCar.year} onChange={onEditCar} required/>
            </label>

            <button>save</button>
        </form>
    );
}