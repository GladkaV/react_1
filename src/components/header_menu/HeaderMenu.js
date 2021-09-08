import './HeaderMenu.css';
import {Link} from 'react-router-dom';

export default function HeaderMenu() {

    return (
        <nav className={'header_menu'}>
            <ul>
                <li>
                    <Link to={'/comedy'}>
                        Comedy
                    </Link>
                </li>
                <li>
                    <Link to={'/action'}>
                        Action
                    </Link>
                </li>
                <li>
                    <Link to={'/thriller'}>
                        Thriller
                    </Link>
                </li>
            </ul>
        </nav>
    );
}