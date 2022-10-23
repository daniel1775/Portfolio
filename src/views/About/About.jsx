import style from './About.module.css';

import Button from '../../components/Button/Button';

export default function About(props) {
	const { darkMode, language } = props;

	const aboutEnglishDescription = `My name is Daniel, I love everything related to technology, I enjoy 
		challenging myself searching new knowledges and opportunities. Mainly, I develop and design of web
		pages build with ReactJS, making use of all good practices such as Mobile First and Responsive Design`;

	const aboutSpanishDescription = `Mi nombre es Daniel, soy un apasionado por la tecnología, disfruto 
		retarme constantemente en busca de nuevos conocimientos y oportunidades. Principalmente, diseño y desarrollo
		de páginas web construidas con React JS, haciendo uso de todas las buenas prácticas Mobile First y Responsive Design.`;

	return (
		<section 
			id='about' 
			className={`${style.about} ${darkMode ? style.about_dark : style.about_light}`}
		>
			<h2 className={style.about_title}>
				{language ? 'SOBRE MI' : 'ABOUT ME'}
				<hr />
			</h2>
			<p className={style.about_text}>
				{language ? aboutSpanishDescription : aboutEnglishDescription}
			</p>
			<div className={style.about_button}>
				<Button link={'https://drive.google.com/drive/u/0/folders/1D2DRSU7k7C7e6YCPQEovC0O-G0Ba3hg4'}>
					Download CV
				</Button>
			</div>
		</section>
	);
}
