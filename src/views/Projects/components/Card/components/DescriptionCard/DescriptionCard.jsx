import style from './DescriptionCard.module.css';

export default function DescriptionCard(props) {
	const { description, showDescription, bgImage, bgImageTitle, ExternalLinks, TagsTech } = props;

	return (
		<div className={`${style.description_card}`}>
			<div className={`${style.content} ${showDescription && style.content_show}`}>
				<p className={style.description_text}>{ description }</p>
				{ ExternalLinks }
				{ TagsTech }
			</div>
            <div className={style.bg}>
                <img src={bgImage} alt={bgImageTitle} />
            </div>
		</div>
	);
}
