import style from './TopBar.module.css';

export default function TopBar( props ) {
	const { title, animate } = props;

	return (
		<div className={style.TopBar}>
			<h2>{ title }</h2>
			<div 
				className={`${style.circles_container} ${animate ? style.close_animation : style.points_animation}`}
			>
				<div className={`${style.circle} ${style.circle_one}`} />
				<div className={`${style.circle} ${style.circle_two}`} />
				<div className={`${style.circle} ${style.circle_three}`} />
			</div>
		</div>
	);
}