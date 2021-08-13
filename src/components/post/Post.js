import './Post.css'

export default function Post({post: {body, title}}) {
    return (
        <div className={'post'}>
            <div className={'post-title'}>
                - {title}
            </div>
            <div>{body}</div>
        </div>
    );
}