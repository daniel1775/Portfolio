
import style from './DescriptionCard.module.css';

import { AiOutlinePlusCircle as MoreIcon } from "react-icons/ai";

export default function DescriptionCard( props, children ) {
  const { ExternalLinks, TagsTech, onHandleDescriptionHide, description, image, showDescription } = props;

  return(
    <div className={`${style.description_card} ${showDescription ? style.description_card_show : style.description_card_hide}`}>
      <div className={`${style.content}`}>
        <p>{ description }</p>
        { ExternalLinks }
        { TagsTech }
      </div>
      <button className={style.button_more} onClick={ onHandleDescriptionHide }>
        <MoreIcon />
      </button>
      <img className={style.bg_image} src={ image } alt="" />
    </div>
  )
}