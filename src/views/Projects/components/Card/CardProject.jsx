import style from './CardProject.module.css';

import TopBar from './components/TopBar/TopBar';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Card( props ){
  const { image, title, description, tags, github, deploy } = props;

  return(
    <div className={style.card}>
      <TopBar title={title}/>
      <img src={image} alt={title} />
      
      <div className={style.hover_container}>
        <p>{description}</p>
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
    </div>
  );
}