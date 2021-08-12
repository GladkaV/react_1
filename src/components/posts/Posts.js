import './Posts.css';
import {useEffect, useState} from "react";
import {getPosts} from "../../service/posts.service";
import Post from "../post/Post";

export default function Posts({id}) {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts(id).then(value => setPosts([...value]))
    }, [])

    return (
        <div className={'posts'}>
            <ul>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </ul>
        </div>
    );
}