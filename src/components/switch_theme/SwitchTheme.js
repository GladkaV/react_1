import './SwitchTheme.css';
import {useDispatch} from "react-redux";
import {change_theme} from "../../redux/action";

export default function SwitchTheme() {
    let dispatch = useDispatch();

    const onclick = (value) => {
        dispatch(change_theme(value));
    }

    return (
        <div className={'switch-theme'}>
            <button onClick={() => onclick('active')} className={'switch-theme-dark'}></button>
            <button onClick={() => onclick(false)} className={'switch-theme-light'}></button>
        </div>
    );
}