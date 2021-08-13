import './Comment.css'

export default function Comment({comment, showComment}) {
    let onClick = () => {
        showComment(comment);
    }
    return (
        <div className={'comment'}>
            {comment.name}
            <button onClick={onClick}>details</button>
        </div>
    );
}