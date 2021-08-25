import {useEffect, useState} from "react";
import {getPosts} from "../../service/posts.service";
import Post from "../post/Post";
import './Posts.css';

export default function Posts() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, []);

    return (
        <div className={'posts'}>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
}