import style from './CardProject.module.css';

import TopBar from './components/TopBar/TopBar';
import DescriptionCard from './components/DescriptionCard/DescriptionCard';
import TagsTech from './components/DescriptionCard/components/TagsTech/TagsTech';

import { useState } from 'react';
import ExternalLinks from './components/DescriptionCard/components/ExternalLinks/ExternalLinks';

export default function Card( props ){
  const [ showDescription, setShowDescription ] = useState(false);
  const { image, title, github, deploy, description, tags } = props;

  function handleDescriptionHide() {
    if(showDescription) {
      setShowDescription(false);
    }
  }

  return(
    <div className={`${style.card}`}>
      <TopBar
        title={ title }
        animate={ showDescription }
        onHandleDescription={ () => setShowDescription(false) }
      />
      <DescriptionCard
        onHandleDescriptionHide={ handleDescriptionHide }
        description={ description }
        image={ image }
        showDescription={ showDescription }
        ExternalLinks={
          <ExternalLinks 
            deploy={ deploy }
            github={ github }
          />}
        TagsTech={
          <TagsTech 
            tags={ tags }
          />}
      />
    </div>
  );
}