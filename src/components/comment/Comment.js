import './Comment.css'

export default function Comment({comment}) {
    return (
        <div className={'comment'}>
            <span>{comment.id}</span>
            <span>name</span>
            {comment.name}
            <span>body</span>
            {comment.body}
        </div>
    );
}