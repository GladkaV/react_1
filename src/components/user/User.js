import './User.css'
import Posts from "../posts/Posts";

export default function User({user: {name, id}}) {
    return (
        <div className={'user'}>
            <h3>{id}.{name}</h3>
            <Posts id={id}/>
        </div>
    );
}