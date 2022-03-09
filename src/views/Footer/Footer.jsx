import style from './Footer.module.css';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className={style.footer}>
			<p className={style.footer_text}>Copyright ©. Daniel Nieto 2021</p>
			<div className={style.footer_section}>
				<div>
					<a href="https://github.com/daniel1775?tab=repositories" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
				</div>
				<div>
					<a href="https://www.linkedin.com/in/daniel-bustos-nieto-71407619a" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
				</div>
			</div>
		</footer>
	);
}
