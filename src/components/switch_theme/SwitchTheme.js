import {useState} from "react";
import './SwitchTheme.css';

const css = `
        html { 
            filter: invert(100%);
            background: #fefefe 
        }
        * { 
            background-color: inherit 
        }
        img:not([src*=".svg"]), video { 
            filter: invert(100%) 
        }
        .switch-theme-light {
            opacity: 1;
        }
        .switch-theme-dark {
            opacity: .3;
        }`

export default function SwitchTheme() {
    let [theme, setTheme] = useState(false);

    return (
        <div className={'switch-theme'}>
            <button onClick={() => setTheme(true)} className={'switch-theme-dark'}></button>
            <button onClick={() => setTheme(false)} className={'switch-theme-light'}></button>

            {
                theme && <style>{css}</style>
            }

        </div>
    );
}