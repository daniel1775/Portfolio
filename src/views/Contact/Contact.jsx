import style from './Contact.module.css';

import plane from '../../img/plane-icon.svg';

export default function Contact() {
	return (
		<div className={style.contact}>
			<img className={style.image} src={plane} alt="" />
			<div className={style.contact_section}>
				<h2 className={style.contact_title}>
					CONTACT ME
					<hr /> 
				</h2>
        <form className={style.contact_form} action="">
          <input type="text" placeholder="Name" autoComplete="off" />
          <input type="text" placeholder="Email" autoComplete="off" />
          <textarea name="message" cols="30" rows="10" placeholder="Message" autoComplete="off" />
          <button className={style.form_button}>Send</button>
        </form>
			</div>
		</div>
	);
}
