import style from './Contact.module.css';

import plane from '../../assets/img/plane-icon.svg';

import Button from '../../components/Button/Button';
import { useState } from 'react';

export default function Contact( props ) {
	const { darkMode } = props;
	const [ subject, setSubject ] = useState("");
	const [ message, setMessage ] = useState("");

	return (
		<section id='contact' className={`${style.contact} ${darkMode ? style.contact_dark : style.contact_light}`}>
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
					<input 
						type="text" 
						placeholder="Subject"
						value={subject}
						onChange={e => setSubject(e.target.value)} 
						autoComplete="off"
					/>
					<textarea
						name="message"
						cols="30"
						rows="10"
						placeholder="Message"
						value={message}
						onChange={e => setMessage(e.target.value)}
						autoComplete="off"
					/>
					<div className={style.form_button_container}>
						<Button link={`mailto:danilog1000@gmail.com?body=${message}?subject=${subject}`}>
							Send Me
						</Button>
					</div>
				</form>
			</div>
		</section>
	);
}
