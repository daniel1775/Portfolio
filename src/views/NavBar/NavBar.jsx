import style from './NavBar.module.css'
import logo from '../../img/logo.svg';

import { HiOutlineSun, HiOutlineMenuAlt3, HiMoon } from 'react-icons/hi'
import { useState } from 'react';

export default function NavBar(props){
  const { language, setLanguage, darkMode, setDarkMode } = props;
  const [ showMenu, setShowMenu ] = useState(false);
  
  return(
    <nav className={style.nav}>
      <img className={style.logo} src={logo} alt="" />

      <ul className={`${style.items} ${showMenu ? style.items_show : style.items_hide}`}>
        <li className={style.items_about}><a className="nav__active" href="#about">ABOUT</a></li>
        <li className={style.items_skills}><a href="#skills">SKILLS</a></li>
        <li className={style.items_portfolio}><a href="#portfolio">PORTFOLIO</a></li>
      </ul>

      <div className={style.icons}>
        <div className={style.icons_change}>
          <button className={style.icons_mode}>
            {darkMode ? 
              <HiOutlineSun className={style.icons_hiSun} onClick={() => setDarkMode(false)} /> : 
              <HiMoon className={style.icons_hiMoon} onClick={() => setDarkMode(true)} />}
          </button>

          <div className={style.icons_line}> | </div>

          <button className={style.icons_lang} onClick={() => setLanguage(!language)}>
            {language ? "ES" : "EN"}
          </button>
        </div>
        <HiOutlineMenuAlt3 onClick={() => setShowMenu(!showMenu)} className={style.icons_hiBars}/>
      </div>
    </nav>
  );
}