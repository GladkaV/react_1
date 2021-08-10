import UserAddressGeo from "../user-address-geo/User-address-geo";

export default function UserAddress({street, suite, city, zipcode, geoLat, geoLng}) {

    return (
        <div>
            <div><span>street:</span> {street} </div>
            <div><span>suite:</span> {suite} </div>
            <div><span>city:</span> {city} </div>
            <div><span>zipcode:</span> {zipcode} </div>

            <div className={'user__title'}>geo</div>
            <UserAddressGeo
                geoLat={geoLat}
                geoLng={geoLng}
            />
        </div>
    );
}