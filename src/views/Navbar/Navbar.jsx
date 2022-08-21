import { useState } from 'react';

import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import logo_light from '../../assets/img/raccoon_logo.png';
import logo_dark from '../../assets/img/raccoon_logo_dark.png';
import style from './Navbar.module.css';

export default function Navbar(props) {
	const { mode, darkMode } = props;
	const [showMenu, setShowMenu] = useState(false);

	return (
		<nav
			className={`${style.container} ${darkMode ? style.container_dark : style.container_light}`}
		>
			<div className={style.nav}>
				<img
					className={style.logo}
					src={`${darkMode ? logo_light : logo_dark}`}
					alt=""
				/>
				<div className={style.nav_menu__mode}>
					{mode}
					<div
						className={`${style.icon_hiBars} ${
							darkMode ? style.hiBars_light : style.hiBars_dark
						}`}
					>
						<HiOutlineMenuAlt3 onClick={() => setShowMenu(!showMenu)} />
					</div>
				</div>
			</div>
			<ul
				className={`${style.items} 
                ${showMenu ? style.items_show : style.items_hide}
                ${darkMode ? style.items_dark : style.items_light}`}
			>
				<li className={style.items_about}>
					<a className="nav__active" href="#about">
						ABOUT
					</a>
				</li>
				<li className={style.items_skills}>
					<a href="#skills">SKILLS</a>
				</li>
				<li className={style.items_portfolio}>
					<a href="#portfolio">PORTFOLIO</a>
				</li>
			</ul>
			<div className={style.icons_mode}>{mode}</div>
		</nav>
	);
}
