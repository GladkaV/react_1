import {useEffect, useState} from "react";
import {getPosts} from "../../service/posts.service";
import Post from "../post/Post";
import {getComments} from "../../service/comments.service";
import Comments from "../comments/Comments";
import './Posts.css'

export default function Posts() {
    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState(null);
    let [comments, setComments] = useState(null);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    }, [])

    let showPost = (post) => {
        setPost({...post});
        setComments(null);
    }

    let onClick = () => {
        getComments(post.id).then(value => setComments([...value]));
    }

    return (
        <div>
            <h2>Posts</h2>
            <div className={'posts'}>
                {
                    posts.map(post =>
                        <Post
                            key={post.id}
                            post={post}
                            showPost={showPost}
                        />)
                }
            </div>

            {
                post &&
                <div className={'post-descr'}>
                    <div>userId: {post.userId} - id: {post.id}</div>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <button onClick={onClick}>show comments</button>
                </div>
            }

            {
                comments && <Comments comments={comments} />
            }
        </div>
    );
}