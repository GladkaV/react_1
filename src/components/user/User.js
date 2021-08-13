import './User.css'

export default function User({user, showPosts}) {
    const onClick = () => {
        showPosts(user.id);
    }

    return (
        <div className={'user'}>
            <div>{user.name}</div>
            <button onClick={onClick}>show posts</button>
        </div>
    );
}