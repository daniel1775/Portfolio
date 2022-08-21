import style from './ExternalLinks.module.css';

import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function ExternalLinks(props) {
	const { deploy, github } = props;

	return (
		<div className={style.external_links}>
			<a
				className={`${style.deploy_icon} ${style.icon}`}
				href={deploy}
				target="_blank"
				rel="noreferrer"
			>
				<FaExternalLinkAlt />
			</a>
			<a
				className={`${style.github_icon} ${style.icon}`}
				href={github}
				target="_blank"
				rel="noreferrer"
			>
				<FaGithub />
			</a>
		</div>
	);
}
