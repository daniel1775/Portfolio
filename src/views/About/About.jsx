import style from './About.module.css';

export default function About() {
	return (
		<div className={style.about}>
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
      <button className={style.about_button}>Download CV</button>
		</div>
	);
}
