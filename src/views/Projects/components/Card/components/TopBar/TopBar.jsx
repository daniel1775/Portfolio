import style from './TopBar.module.css';

export default function TopBar( props ) {
	const { title } = props;

	return (
		<div className={style.TopBar}>
			<h2>{ title }</h2>
			<div className={style.circles_container}>
				<div className={style.circle} />
				<div className={style.circle} />
				<div className={style.circle} />
			</div>
		</div>
	);
}