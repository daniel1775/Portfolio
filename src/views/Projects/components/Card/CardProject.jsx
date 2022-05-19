import style from './CardProject.module.css';

import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Card(props){
  const { image, title, description, tags, github, deploy } = props;
  return(
    <div className={style.card}>
      <img src={image} alt="" />
      
      <div className={style.card_info}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <div className={style.card_developed_skills}>
        <div className={style.card_developed_main}>
          <div className={style.card_developed_title}>Developed</div> 
          <div className={style.card_developed}>
            {tags.map(element => <div>{element}</div>)}
          </div>
        </div>
        <div className={style.card_links}>
          <a href={deploy} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt />
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}