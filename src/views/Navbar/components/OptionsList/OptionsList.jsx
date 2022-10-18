import style from './OptionsList.module.css';

export default function OptionsList(props) {
    const { darkMode, showMenu } = props;
    
    return(
        <ul className={`${style.options_list} 
            ${showMenu ? style.options_list_show : style.options_list_hide}
            ${darkMode ? style.options_list_dark : style.options_list_light}`}
        >
            <li>
                <a className="nav__active" href="#about">
                    ABOUT
                </a>
            </li>
            <li>
                <a href="#projects">
                    PORTFOLIO
                </a>
            </li>
            <li>
                <a href="#contact">
                    CONTACT
                </a>
            </li>
        </ul>
    )
}