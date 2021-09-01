import './App.css';
import Users from "./components/users/Users";

function App() {
    return (
        <div className={'app'}>
            <h2>Users (redux-thunk)</h2>
            <Users/>
        </div>
    );
}

export default App;
