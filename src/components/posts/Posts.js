import {useEffect, useState} from "react";
import {getPosts} from "../../service/posts.service";
import Post from "../post/Post";
import './Posts.css';
import {Route} from "react-router-dom";
import PostDetails from "../postDetails/PostDetails";

export default function Posts(props) {
    let {match: {url}} = props;

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    }, [])

    return (
        <div>
            <h2>Posts</h2>
            <div className={'posts'}>
                {
                    posts.map(post => <Post key={post.id} post={post} url={url}/>)
                }
            </div>
            <Route path={url + '/:id'} render={(props) => {
                return <PostDetails {...props}/>
            }}/>
        </div>
    );
}