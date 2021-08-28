import './Car.css';

export default function Car({car, deleteCar, editCar}) {
    let fnEdit = () => {
        editCar(car)
    }
    let fnDelete = () => {
        deleteCar(car.id);
    }
    return (
        <div className={'car'}>
            <div><span>model:</span> {car.model} </div>
            <div><span>price:</span> {car.price} </div>
            <div><span>year:</span> {car.year} </div>
            <div className={'car-btns'}>
                <button onClick={fnDelete}>delete</button>
                <button onClick={fnEdit}>edit</button>
            </div>
        </div>
    );
}