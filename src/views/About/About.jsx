import style from './About.module.css';

import Button from '../../components/Button/Button';

export default function About(props) {
	const { darkMode } = props;

	return (
		<section className={`${style.about} ${darkMode ? style.about_dark : style.about_light}`}>
			<h2 className={style.about_title}>
				ABOUT ME
				<hr />
			</h2>
			<p className={style.about_text}>
				Hello, my name is Daniel Nieto. I have a programming related
				technologist and aspiring full stack developer with an interest in UI /
				UX design. I try to stay at the frontend of technology, learn new
				technologies to implement in my work.
			</p>
			<div className={style.about_button}>
				<Button link={'https://drive.google.com/drive/u/0/folders/1D2DRSU7k7C7e6YCPQEovC0O-G0Ba3hg4'}>
					Download CV
				</Button>
			</div>
		</section>
	);
}
