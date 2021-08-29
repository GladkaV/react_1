import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

function App() {
    return (
        <Router>
            <div className={'app'}>
                <ul className={'list'}>
                    <li>
                        <Link to={'/users'}>Users</Link>
                    </li>
                    <li>
                        <Link to={'/posts'}>Posts</Link>
                    </li>
                </ul>
                <Route path={'/users'} component={Users}/>
                <Route path={'/posts'} component={Posts}/>
            </div>
        </Router>
    );
}

export default App;
