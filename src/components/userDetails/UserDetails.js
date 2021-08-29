import './userDetails.css';

export default function UserDetails({location: {state}}) {
    return (
        <div className={'user-details'}>
            <div><span>name:</span>{state.name}</div>
            <div><span>username:</span>{state.username}</div>
            <div><span>phone:</span>{state.phone}</div>
            <div><span>email:</span>{state.email}</div>
            <div><span>website:</span>{state.website}</div>
            <div><span>city:</span>{state.address.city}</div>
            <div><span>street:</span>{state.address.street}</div>
            <div><span>company:</span>{state.company.name}</div>
        </div>
    );
}