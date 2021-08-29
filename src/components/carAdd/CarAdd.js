import {useState} from "react";
import {addCarService} from "../../service/addCar.service";
import './carAdd.css';

export default function CarAdd() {
    let [value, setValue] = useState({
        'model': '',
        'price': '',
        'year': '',
    });

    let onModelChange = (e) => {
        setValue({...value, [e.target.name] : e.target.value})
    }

    let onFormSubmit = (e) => {
        e.preventDefault();
        addCarService(value).then(value => console.log(value));

        setValue({
            'model': '',
            'price': '',
            'year': '',
        })
    }

    return (
        <form onSubmit={onFormSubmit} className={'car-form'}>
            <label>
                Model:
                <input type="text" name={'model'} onChange={onModelChange} value={value.model} required/>
            </label>
            <label>
                Price:
                <input type="number" name={'price'} min={0} onChange={onModelChange} value={value.price} required/>
            </label>
            <label>
                Year:
                <input type="number" name={'year'} min={1990} max={2021} onChange={onModelChange} value={value.year} required/>
            </label>
            <button>save</button>
        </form>
    );
}