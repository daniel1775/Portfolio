import style from './TopBar.module.css';

export default function TopBar( props ) {
	return (
		<div className={style.TopBar}>
			<div 
				className={`${style.circles_container}`}
			>
				<div className={`${style.circle} ${style.circle_one}`} />
				<div className={`${style.circle} ${style.circle_two}`} />
				<div className={`${style.circle} ${style.circle_three}`} />
			</div>
		</div>
	);
}