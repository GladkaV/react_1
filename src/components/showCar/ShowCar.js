import './ShowCar.css';

export default function ShowCar({car: {model, price, year}}) {
    return (
        <li className={'show-car'}>
            <p>{model}</p>
            <div><span>price:</span> {price} $</div>
            <div><span>year:</span> {year}</div>
        </li>
    );
}