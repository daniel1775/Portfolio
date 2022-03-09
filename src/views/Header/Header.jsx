import style from './Header.module.css';
import pc from '../../img/pc.svg';

export default function Header() {
	return (
		<header className={style.header}>
      <div className={style.titles}>
        <h1>Hi, I am</h1>
        <h1 className={style.titles_name}>Daniel Nieto</h1>
        <h2>Full stack - developer</h2>
      </div>
      <div className={style.image}>
        <img src={pc} alt="" />
      </div>
		</header>
	);
}
