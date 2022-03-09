
import Card from './components/Card/Card';

import data from '../../data/data.json';

import style from './Projects.module.css';
import bioshock from '../../img/bioshock.png';
import verduras from '../../img/verduras.PNG';

export default function Projects(){
  let images = [bioshock, verduras];

  return(
    <div className={style.projects}>
      <h2 className={style.projects_title}>
        PORTFOLIO
        <hr/>
      </h2>
      <div className={style.cards}>
        {data.map(element => (
          <Card 
            key={element.id}
            image={images[element.id-1]}
            title={element.title}
            description={element.description}
            tags={element.tags}
            github={element.github}
            deploy={element.deploy}
          />
        ))}
      </div>
    </div>
  );
}