import style from './TopBar.module.css';

import { IoIosCloseCircle } from "react-icons/io";

export default function TopBar( props ) {
	const { showDescription, onHideDescription, darkMode } = props;

	return (
		<div className={`${style.TopBar}`}>
			<div 
				className={`${style.circles_container}`}
			>
				<div className={`${style.circle} ${style.circle_one}`} />
				<div className={`${style.circle} ${style.circle_two}`} />
				<div className={`${style.circle} ${style.circle_three}`} />
			</div>
			<div 
				className={`${style.close} ${showDescription ? style.close_show : style.close_hide} ${darkMode ? style.close_dark : style.close_light}`}
				onClick={onHideDescription}
			>
				<IoIosCloseCircle />
			</div>
		</div>
	);
}