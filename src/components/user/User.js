import {useHistory} from "react-router";
import './User.css';

export default function User({user, url}) {
    let history = useHistory();

    let onClick = () => {
        history.push(
            url + '/' + user.id,
            user
        )
    }

    return (
        <div className={'user'}>
            {user.name}
            <button onClick={onClick}>details</button>
        </div>
    );
}