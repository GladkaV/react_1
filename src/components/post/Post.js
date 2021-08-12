import './Post.css'
import Comments from "../comments/Comments";

export default function Post({post: {title, id}}) {
    return (
        <li className={'post'}>
            <span>{id} post:</span> {title}
            <Comments id={id}/>
        </li>
    );
}