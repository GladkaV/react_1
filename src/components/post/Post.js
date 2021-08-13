import './Post.css'

export default function Post({post, showPost}) {
    let onclick = () => {
        showPost(post);
    }

    return (
        <button className={'post'} onClick={onclick}>{post.id}</button>
    );
}