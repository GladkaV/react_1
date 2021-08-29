import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import Cars from "./components/cars/Cars";
import CarAdd from "./components/carAdd/CarAdd";
import CarUpdate from "./components/carUpdate/CarUpdate";

function App() {
    return (
        <Router>
            <div className={'api'}>
                <ul className={'nav-list'}>
                    <li>
                        <Link to={'/cars'}>Cars</Link>
                    </li>
                    <li>
                        <Link to={'/create-car'}>Create car</Link>
                    </li>
                    <li>
                        <Link to={'/update-car'}>Update car</Link>
                    </li>
                </ul>

                <Route path={'/cars'}>
                    <h2>Cars</h2>
                    <Cars/>
                </Route>

                <Route path={'/create-car'}>
                    <h2>Create car</h2>
                    <CarAdd/>
                </Route>

                <Route path={'/update-car'}>
                    <h2>Update car</h2>
                    <CarUpdate/>
                </Route>
            </div>
        </Router>
    );
}

export default App;
