import { useState } from 'react';
import GlobalContext from './context/GlobalContext';

import style from './App.module.css';

import Navbar from './views/Navbar/Navbar';
import Header from './views/Header/Header';
import About from './views/About/About';
import Skills from './views/Skills/Skills';
import Projects from './views/Projects/Projects';
import Contact from './views/Contact/Contact';
import Footer from './views/Footer/Footer';

// contains the dark mode and language buttons
import Mode from './views/Navbar/components/Mode/Mode';

function App() {
	const [language, setLanguage] = useState(false);
	const [darkMode, setDarkMode] = useState(true);

	return (
		<GlobalContext.Provider value={{ language, darkMode, setLanguage, setDarkMode }}>
			<div className={style.App}>
				<Navbar
					darkMode={darkMode}
					language={language}
					mode={
						<Mode 
							language={language}
							setLanguage={setLanguage}
							darkMode={darkMode}
							setDarkMode={setDarkMode}
						/>
						
					}
				/>
				<Header 
					language={language} 
					darkMode={darkMode} 
				/>
				<div className={`${style.section_about_skills} ${darkMode ? style.section_dark : style.section_light}`}>
					<Skills 
						language={language} 
						darkMode={darkMode}	
					/>
					<About 
						language={language} 
						darkMode={darkMode}	
					/>
				</div>
				<Projects 
					language={language}
					darkMode={darkMode}
				/>
				<Contact 
					language={language}
					darkMode={darkMode}
				/>
				<Footer 
					language={language}
					darkMode={darkMode}
				/>
			</div>
		</GlobalContext.Provider>
	);
}

export default App;
