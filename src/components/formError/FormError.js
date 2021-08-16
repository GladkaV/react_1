import './FormError.css';

export default function FormError({error}) {
    return (
        <div className={'form-err'}>
            {error}
        </div>
    );
}