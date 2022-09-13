import style from './Header.module.css';
import pc from '../../assets/img/pc.svg';

export default function Header(props) {
	const { darkMode } = props;

	return (
		<header className={`${style.header} ${darkMode ? style.header_black : style.header_light}`}>
			<div className={style.header_container}>
				<div className={`${style.titles} ${darkMode ? style.titles_light : style.titles_dark}`}>
					<h1>Hi, I am</h1>
					<h1 className={style.titles_name}>Daniel Nieto</h1>
					<h2>Frontend Developer</h2>
				</div>
				<div className={style.image}>
					<img src={pc} alt="laptop" />
				</div>
			</div>
		</header>
	);
}
