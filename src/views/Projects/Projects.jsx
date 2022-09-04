import CardProject from './components/Card/CardProject';

import data from '../../data/data.json';

import style from './Projects.module.css';
import bioshock from '../../assets/img/bioshock.png';
import verduras from '../../assets/img/verduras.PNG';

export default function Projects() {
	let images = [bioshock, verduras];

	return (
		<section className={style.projects}>
			<div className={style.projects_container}>
				<h2 className={style.projects_title}>
					PORTFOLIO
					<hr />
				</h2>
				<div className={style.cards}>
					{data.map( element => (
						<CardProject
							key={ element.id }
							dataCard={ element }
							bgImage={ images[element.id - 1] }
						/>
					))}
				</div>
			</div>
		</section>
	);
}
