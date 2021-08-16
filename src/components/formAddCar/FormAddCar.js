import {useState} from "react";
import FormError from "../formError/FormError";
import {addCar} from "../../service/car.api.service";
import './FormAddCar.css';

export default function FormAddCar() {
    let [model, setModel] = useState('');
    let [price, setPrice] = useState(0);
    let [year, setYear] = useState(2021);
    let [error, setError] = useState('');

    let onModelChange = (e) => {
        if (e.target.value.length <= 20) {
            setModel(e.target.value);
            setError('');
        } else {
            setError('Вы пытаетесь ввести неактуальные данные');
        }
    }
    let onPriceChange = (e) => {
        if (+e.target.value >= 0) {
            setPrice(+e.target.value)
            setError('');
        } else {
            setError('Вы пытаетесь ввести неактуальные данные');
        }

    }
    let onYearChange = (e) => {
        if (+e.target.value < 1990 || +e.target.value > 2021) {
            setError('Вы пытаетесь ввести неактуальные данные');
        } else {
            setYear(+e.target.value);
            setError('');
        }
    }
    let onFormSubmit = (e) => {
        e.preventDefault();

        let carToSave = {
            model: model,
            price: price,
            year: year,
        }

        addCar(carToSave);

        // очистить форму
        setModel('');
        setPrice(0);
        setYear(2021);
    }

    return (
        <div className={'form-add-car'}>
            <form onSubmit={onFormSubmit}>
                <label>
                    Model:
                    <input type="text" name={'model'} onChange={onModelChange} value={model} />
                </label>
                <label>
                    Price:
                    <input type="number" name={'price'} onChange={onPriceChange} value={price} />
                </label>
                <label>
                    Year:
                    <input type="number" name={'year'} onChange={onYearChange} value={year} />
                </label>
                <input type="submit" value="save"/>
            </form>
            {
                error && <FormError error={error} />
            }
        </div>
    );
}