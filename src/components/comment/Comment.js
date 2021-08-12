import './Comment.css'

export default function Comment({comment: {body, id}}) {
    return (
        <li className={'comment'}>
            {id}. {body}
        </li>
    );
}