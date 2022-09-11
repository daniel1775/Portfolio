import { useState } from 'react';

import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import logo_light from '../../assets/img/raccoon_logo.png';
import logo_dark from '../../assets/img/raccoon_logo_dark.png';
import style from './Navbar.module.css';

import OptionsList from './components/OptionsList/OptionsList';

export default function Navbar(props) {
	const { mode, darkMode } = props;
	const [ showMenu, setShowMenu ] = useState(false);

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
					{ mode }
					<div
						className={`${style.icon_hiBars} ${
							darkMode ? style.hiBars_light : style.hiBars_dark
						}`}
					>
						<HiOutlineMenuAlt3 onClick={() => setShowMenu(!showMenu)} />
					</div>
				</div>
			</div>
			<OptionsList 
				darkMode={darkMode}
				showMenu={showMenu}
			/>
			<div className={style.icons_mode}>
				{mode}
			</div>
		</nav>
	);
}
