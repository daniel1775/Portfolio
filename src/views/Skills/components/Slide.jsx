import style from './Slide.module.css';

export default function Slide( props ) {
  const { data } = props;

	return (
		<div className={style.slide}>
			<img className={style.image} src={ data.image } alt="slide" />
			<div className={style.title}>
				<p>{ data.title }</p>
			</div>
		</div>
	);
}
