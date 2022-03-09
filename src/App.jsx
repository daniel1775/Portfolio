import { useState } from 'react';
import './App.css';

import NavBar from './views/NavBar/NavBar';
import Header from './views/Header/Header';
import About from './views/About/About';
import Skills from './views/Skills/Skills';
import Projects from './views/Projects/Projects'
import Contact  from './views/Contact/Contact';
import Footer from './views/Footer/Footer';

function App() {
  const [ language, setLanguage ] = useState(false);
  const [ darkMode, setDarkMode] = useState(true);

  return (
    <div className="App">
      <NavBar 
        language={language}
        setLanguage={setLanguage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Header />
      <div className='about'>
        <About />
      </div>
      <div className='skills'>
        <Skills />
      </div>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
