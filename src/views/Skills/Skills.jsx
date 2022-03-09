import style from './Skills.module.css';

import css_icon from '../../img/css-icon.svg';
import figma_icon from '../../img/figma-icon.svg';
import git_icon from '../../img/git-icon.svg';
import github_icon from '../../img/github-icon.svg';
import html_icon from '../../img/html-icon.svg';
import js_icon from '../../img/js-icon.svg';
import mongo_icon from '../../img/mongo-icon.svg';
import react_icon from '../../img/react-icon.svg';

export default function Skills(){
  return(
    <div className={style.skills}>
      <h2 className={style.skills_title}>
        MY SKILLS
        <hr />
      </h2>
      <div className={style.skills_icons}>
        <div>
          <img src={css_icon} alt="" />
          <p>CSS</p>
        </div>
        <div>
          <img src={figma_icon} alt="" />
          <p>Figma</p>
        </div>
        <div>
          <img src={git_icon} alt="" />
          <p>Git</p>
        </div>
        <div>
          <img src={github_icon} alt="" />
          <p>GitHub</p>
        </div>
        <div>
          <img src={html_icon} alt="" />
          <p>HTML</p>
        </div>
        <div>
          <img src={js_icon} alt="" />
          <p>JavaScript</p>
        </div>
        <div>
          <img src={mongo_icon} alt="" />    
          <p>MongoDB</p>
        </div>
        <div>
          <img src={react_icon} alt="" />
          <p>React JS</p>
        </div>
      </div>
    </div>
  );
}