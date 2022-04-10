import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Header from './views/Header/Header';
import About from './views/About/About';
import Skills from './views/Skills/Skills';
import Projects from './views/Projects/Projects'
import Contact  from './views/Contact/Contact';
import Footer from './components/Footer/Footer';

import Mode from './components/Navbar/components/Mode/Mode';

function App() {
  const [ language, setLanguage ] = useState(false);
  const [ darkMode, setDarkMode] = useState(true);

  return (
    <div className="App">
      <Navbar
        darkMode={darkMode}
        mode={
          <Mode
            language={language}
            setLanguage={setLanguage}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />}
      />
      <Header
        language={language}
        darkMode={darkMode}
      />
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
