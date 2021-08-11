import './Posts.css'
import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../../service/post.service";
import {getAxioPosts} from "../../service/post.service.axios";

export default function Posts() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        // getPosts().then(value => setPosts([...value]));
        getAxioPosts().then(({data}) => setPosts([...data]))
    }, []);

    return (
        <ul className={'posts'}>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </ul>
    );
}