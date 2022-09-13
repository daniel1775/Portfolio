import style from './Button.module.css';
import glogalContext from '../../context/GlobalContext';
import { useContext } from 'react';

export default function Button(props) {
    const { link, children, className } = props;
    const { language, darkMode } = useContext(glogalContext);

    return (
        <a className={`${style.button} ${className}`} href={link} target="_blank">
            { children }
        </a>
    );
}