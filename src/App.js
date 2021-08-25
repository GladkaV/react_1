import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
    return (
        <Router>
            <div className={'app'}>
                <h2>Route</h2>
                <ul className={'list-links'}>
                    <li>
                        <Link to={'/users-page'}>Show users</Link>
                    </li>
                    <li>
                        <Link to={'/posts-page'}>Show posts</Link>
                    </li>
                    <li>
                        <Link to={'/comments-page'}>Show comments</Link>
                    </li>
                </ul>

                <Route path={'/users-page'}>
                    <Users/>
                </Route>
                <Route path={'/posts-page'}>
                    <Posts/>
                </Route>
                <Route path={'/comments-page'}>
                    <Comments/>
                </Route>
            </div>
        </Router>
    );
}

export default App;
