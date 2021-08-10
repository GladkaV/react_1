import './User.css';
import UserAddress from "../user-address/User-address";

export default function User({
                                 id,
                                 name,
                                 username,
                                 email,
                                 phone,
                                 website,
                                 companyName,
                                 catchPhrase,
                                 bs,
                                 street,
                                 suite,
                                 city,
                                 zipcode,
                                 geoLat,
                                 geoLng
                             }) {

    return (
        <div className={'user'}>
            <div> {id} - {name} </div>
            <div><span>username:</span> {username} </div>
            <div><span>email:</span> {email} </div>
            <div><span>phone:</span> {phone} </div>
            <div><span>website:</span> {website} </div>
            <div className={'user__title'}>company</div>
            <div><span>name:</span> {companyName} </div>
            <div><span>catchPhrase:</span> {catchPhrase} </div>
            <div><span>bs:</span> {bs} </div>

            <div className={'user__title'}>address</div>
            <UserAddress
                street={street}
                suite={suite}
                city={city}
                zipcode={zipcode}
                geoLat={geoLat}
                geoLng={geoLng}
            />
        </div>
    );
}