import style from './CardProject.module.css';

import TopBar from './components/TopBar/TopBar';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { AiOutlinePlusCircle as MoreIcon } from "react-icons/ai";
import { useState } from 'react';

export default function Card( props ){
  const [ showDescription, setShowDescription ] = useState(false);
  const { image, title, description, tags, github, deploy } = props;

  return(
    <div className={`${style.card} ${showDescription ? style.show_description : style.hide_description}`}>
      <TopBar title={title}/>
      <img className={`${style.bg}`} src={image} alt={title} />
      
      <button 
        className={style.button_more}
        onClick={ () => setShowDescription( prev => !prev) }
      >
        <MoreIcon />
      </button>
      
      <div className={`${style.description_container} ${showDescription ? style.description_show : style.description_hide}`}>
        <p className={style.description_text}>{description}</p>


        <div className={style.developed}>
          <div className={style.tags_container}>
            <div className={style.tags_title}>Developed</div> 
            <div className={style.tags_technologies}>
              {tags.map(element => <div>{element}</div>)}
            </div>
          </div>

          <div className={style.links_container}>
            <a className={style.deploy_icon} href={deploy} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt />
            </a>
            <a className={style.github_icon} href={github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}