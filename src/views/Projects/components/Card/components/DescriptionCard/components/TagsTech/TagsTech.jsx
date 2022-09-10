import style from './TagsTech.module.css';

export default function TagsTech(props) {
	const { tags } = props;

	return (
		<div className={style.tags_tech}>
			<p className={style.title}>Developed</p>
			<div className={style.technologies}>
				{tags.map( (element, index) => (
					<div key={index}>
						{ element }
					</div>
				))}
			</div>
		</div>
	);
}
