import style from './CardProject.module.css';

import TopBar from './components/TopBar/TopBar';
import DescriptionCard from './components/DescriptionCard/DescriptionCard';
import TagsTech from './components/DescriptionCard/components/TagsTech/TagsTech';

import { useState } from 'react';
import { useRef } from 'react';

import ExternalLinks from './components/DescriptionCard/components/ExternalLinks/ExternalLinks';
import { AiOutlinePlusCircle as MoreIcon } from 'react-icons/ai';

export default function Card( props ) {
    const [ showButtonMore, setShowButtonMore ] = useState(true);
    const [ showDescription, setShowDescription ] = useState(false);
    const buttonMoreRef = useRef(null);

    const { dataCard, bgImage } = props;

    function onCloseButtonMoreAnimation() {
        const onShowDescription = () => {
            setShowDescription(true);
            buttonMoreRef.current.removeEventListener('transitionend', onShowDescription);
        }; 
        setShowButtonMore(false);
        buttonMoreRef.current.addEventListener('transitionend', onShowDescription);
    }

    function onHideDescription() {
        setShowDescription(false);
        setTimeout(() => {
            setShowButtonMore(true);
        }, 400);
    }

    return(
        <div className={`${style.card}`}>
            <TopBar 
                showDescription={ showDescription } 
                onHideDescription={ onHideDescription }
            />
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
                className={`${style.button_more} ${!showButtonMore && style.button_more_hide}`} 
                ref={buttonMoreRef} 
                onClick={onCloseButtonMoreAnimation}
            >
                <MoreIcon />
            </button>
        </div>
    );
}