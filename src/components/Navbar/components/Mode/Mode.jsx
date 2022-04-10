
import { useEffect } from 'react';

import style from './Mode.module.css';
import { HiOutlineSun, HiMoon } from 'react-icons/hi';

export default function Mode(props){
  const { language, setLanguage, darkMode, setDarkMode } = props;

  useEffect(() => {
    console.log("DARKMODE: "+ darkMode);
  }, [darkMode])

  return(
    <div className={style.mode}>
      <button 
        className={`${style.button_mode}`}
      >
        {darkMode ? 
        <HiOutlineSun
          className={`${style.icons_hiSun}`} 
          onClick={() => setDarkMode(false)}
        /> : 
        <HiMoon 
          className={style.icons_hiMoon} 
          onClick={() => setDarkMode(true)}
        />}
      </button>
      <div className={`${style.icons_line} ${darkMode ? style.line_light : style.line_dark}`}> | </div>
      <button 
          className={`${style.button_language} ${darkMode ? style.light_mode : style.dark_mode}`} 
          onClick={() => setLanguage(!language)}
        >
          {language ? "ES" : "EN"}
        </button>
    </div>
  );
}