import style from './Mode.module.css';
import { HiOutlineSun, HiMoon } from 'react-icons/hi';

export default function Mode(props) {
	const { language, setLanguage, darkMode, setDarkMode } = props;

	return (
		<div className={style.mode}>
			<button className={`${style.button_mode}`}>
				{darkMode ? (
					<HiOutlineSun
						className={`${style.icons_hiSun}`}
						onClick={() => setDarkMode(false)}
					/>
				) : (
					<HiMoon
						className={style.icons_hiMoon}
						onClick={() => setDarkMode(true)}
					/>
				)}
			</button>
			<div
				className={`${style.icons_line} ${
					darkMode ? style.line_light : style.line_dark
				}`}
			>
				{' '}|{' '}
			</div>
			<button
				className={`${style.button_language} ${
					darkMode ? style.light_mode : style.dark_mode
				}`}
				onClick={() => setLanguage(!language)}
			>
				<svg width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="none">
					<circle className="js-circle circle" cx="50" cy="50" r="48" stroke="white" strokeWidth="3" fill="none"  />
				</svg>
				{language ? 'ES' : 'EN'}
			</button>
		</div>
	);
}
