import {useEffect, useState} from "react";
import {editCarApi} from "../../service/editCar.api";
import './FormCar.css';
import {addCarApi} from "../../service/addCar.api";

export default function FormCar({car, showEditCar, showAllCar}) {
    let [editCar, setFormCar] = useState({});

    useEffect(() => {
        setFormCar({...car});
    }, [car])

    let onchange = (e) => {
        setFormCar({...editCar, [e.target.name]: e.target.value});
    }

    let onsubmit = (e) => {
        e.preventDefault();

        if(car.id) {
            showEditCar(car.id, editCar);
            editCarApi(car.id, editCar).then(value => console.log(value));
        } else {
            addCarApi(editCar).then(json => console.log(json));
            showAllCar();
        }
    }

    return (
        <form onSubmit={onsubmit} className={'form-car'}>
            <label>
                Model:
                <input type="text" name={'model'} value={editCar.model} onChange={onchange} required/>
            </label>
            <label>
                Price:
                <input type="number" min={0} name={'price'} value={editCar.price} onChange={onchange} required/>
            </label>
            <label>
                Year:
                <input type="number" min={1990} max={2021} name={'year'} value={editCar.year} onChange={onchange} required/>
            </label>
            <button>save</button>
        </form>
    );
}