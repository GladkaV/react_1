import './CarError.css';

export default function CarError({err}) {
    return (
        <div className={'car-err'}>
            {err}
        </div>
    );
}