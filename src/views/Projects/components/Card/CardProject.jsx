import style from './CardProject.module.css';

import TopBar from './components/TopBar/TopBar';
import DescriptionCard from './components/DescriptionCard/DescriptionCard';
import TagsTech from './components/DescriptionCard/components/TagsTech/TagsTech';

import { useState } from 'react';
import ExternalLinks from './components/DescriptionCard/components/ExternalLinks/ExternalLinks';

import { AiOutlinePlusCircle as MoreIcon } from 'react-icons/ai';
import { useRef } from 'react';

export default function Card( props ) {
    const [ closeButtonMore, setCloseButtonMore ] = useState(false);
    const [ showDescription, setShowDescription ] = useState(false);
    const buttonMore = useRef(null);

    const { dataCard, bgImage } = props;

    function onCloseButtonMoreAnimation() {
        setCloseButtonMore(!closeButtonMore);
        buttonMore.current.addEventListener('transitionend', () => {
            setShowDescription(true);
        });
    }

    return(
        <div className={`${style.card}`}>
            <TopBar />
            <DescriptionCard
                description={ dataCard.description }
                showDescription={ showDescription }
                bgImage={ bgImage }
                bgImageTitle = { dataCard.title }
                ExternalLinks={
                    <ExternalLinks 
                        deploy={ dataCard.deploy }
                        github={ dataCard.github }
                    />
                }
                TagsTech={
                    <TagsTech tags={ dataCard.tags } />
                }
            />
            <button 
                className={`${style.button_more} ${closeButtonMore && style.button_more_hide}`} 
                ref={buttonMore} 
                onClick={onCloseButtonMoreAnimation}
            >
                <MoreIcon />
            </button>
        </div>
    );
}