import './Post.css';

export default function Post({post}) {
    return (
        <div className={'post'}>
            <span>{post.id}</span>
            <span>title</span>
             {post.title}
            <span>body</span>
            {post.body}
        </div>
    );
}