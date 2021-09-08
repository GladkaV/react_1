import './Header.css'
import logo from '../../assets/img/logo.svg';
import {Link} from 'react-router-dom';
import HeaderMenu from "../header_menu/HeaderMenu";
import HeaderSearch from "../header_search/HeaderSearch";
import SwitchTheme from "../switch_theme/SwitchTheme";
import {useState} from "react";

export default function Header() {
    let [btn, setBtn] = useState(true);


    const onclick = () => {
        if (btn) return  setBtn(false)

        return setBtn(true);
    }

    return (
        <header className={'header'}>
            <div className={'container'}>
                <div className={'header-inner'}>
                    <Link to={'/'} className={'logo'}>
                        <img src={logo} alt="logo"/>
                    </Link>

                    <div className={`header-block ${btn ? '' : 'active'}`}>
                        <HeaderMenu/>

                        <HeaderSearch/>

                        <Link to={'/'} className={'header-user'}></Link>

                        <SwitchTheme/>
                    </div>
                    <button onClick={onclick} className={`header-btn ${btn ? '' : 'active'}`}>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
}