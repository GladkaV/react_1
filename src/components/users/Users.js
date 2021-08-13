import {useEffect, useState} from "react";
import {getUsers} from "../../service/users.service";
import User from "../user/User";
import {getPosts} from "../../service/posts.service";
import Post from "../post/Post";
import './Users.css';

export default function Users() {
    let [users, setUsers] = useState([]);
    let [posts, setPosts] = useState(null);

    const showPosts = (id) => {
        getPosts(id).then(value => setPosts([...value]))
    }

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);

    return (
        <div className={'wrap-users'}>
            <div>
                <h2>Users</h2>
                {
                    users.map((user) => (
                        <User
                            key={user.id}
                            user={user}
                            showPosts={showPosts}
                        />))
                }
            </div>
            {
                posts && <div>
                    <h2>Posts</h2>
                    {
                        posts.map(post => <Post key={post.id} post={post} />)
                    }
                </div>
            }
        </div>
    );
}