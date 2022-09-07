import style from './Contact.module.css';

import plane from '../../assets/img/plane-icon.svg';

export default function Contact( props ) {
	const { language, darkMode } = props;

	return (
		<section className={`${style.contact} ${darkMode ? style.contact_dark : style.contact_light}`}>
			<img className={style.image} src={plane} alt="" />
			<div className={style.contact_section}>
				<h2 className={style.contact_title}>
					CONTACT ME
					<hr />
				</h2>
				<form 
					className={style.contact_form} 
					action="https://formspree.io/f/xrgjgvvd"
					method="POST"
				>
					<input type="text" placeholder="Name" autoComplete="off" />
					<input type="text" placeholder="Email" autoComplete="off" />
					<textarea
						name="message"
						cols="30"
						rows="10"
						placeholder="Message"
						autoComplete="off"
					/>
					<div className={style.form_button_container}>
						<button className={style.form_button}>Send</button>
					</div>
				</form>
			</div>
		</section>
	);
}
