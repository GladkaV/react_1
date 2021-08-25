import './User.css'

export default function User({user}) {
    return (
        <div className={'user'}>
            <span>name</span>
            {user.name}
            <span>email</span>
            {user.email}
        </div>
    );
}