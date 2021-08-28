import './Post.css';

export default function Post({post}) {
    return (
        <div className={'post'}>
            <div><span>title:</span>{post.title}</div>
            <div><span>body:</span>{post.body}</div>
        </div>
    );
}