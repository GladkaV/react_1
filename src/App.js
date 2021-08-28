import './App.css';
import Cars from "./components/cars/Cars";
import Users from "./components/users/Users";
import {getPosts} from "./service/posts.service";
import {useEffect, useState} from "react";
import Posts from "./components/posts/Posts";

function App() {
    let [user, setUser] = useState(1);
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts(user).then(value => setPosts([...value]));
    }, [user]);

    let getId = (id) => {
        getPosts(id).then(value => setPosts([...value]));
        setUser(id);
    }

    return (
        <div className={'app'}>
            <Cars/>
            <Users getId={getId}/>
            
            {
                posts && <Posts posts={posts}/>
            }
        </div>
    );
}

export default App;
