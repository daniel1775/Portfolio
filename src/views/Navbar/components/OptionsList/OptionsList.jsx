import style from './OptionsList.module.css';

export default function OptionsList(props) {
    const { darkMode, language, showMenu } = props;
    
    return(
        <ul className={`${style.options_list} 
            ${showMenu ? style.options_list_show : style.options_list_hide}
            ${darkMode ? style.options_list_dark : style.options_list_light}`}
        >
            <li>
                <a className="nav__active" href="#about">
                    {language ? 'SOBRE MI' : 'ABOUT ME'}
                </a>
            </li>
            <li>
                <a href="#skills">
                    {language ? 'HABILIDADES' : 'SKILLS'}
                </a>
            </li>
            <li>
                <a href="#portfolio">
                    {language ? 'PORTAFOLIO' : 'PORTFOLIO'}
                </a>
            </li>
        </ul>
    )
}