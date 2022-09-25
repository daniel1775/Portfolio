import style from './Button.module.css';
import glogalContext from '../../context/GlobalContext';
import { useContext } from 'react';

export default function Button(props) {
    const { link, children } = props;
    const { language, darkMode } = useContext(glogalContext);

    return (
        <a 
            className={`${style.button} ${darkMode ? style.button_dark_mode : style.button_light_mode}`} 
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            { children }
        </a>
    );
}