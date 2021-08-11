import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";


export default function App() {
    return (
        <div>
            <h3>Users</h3>
            <Users />
            <h3>Posts</h3>
            <Posts/>
            <h3>Comments</h3>
            <Comments />
        </div>
    );
}