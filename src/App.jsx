import { useState } from 'react';
import './App.css';
import NavBar from './views/NavBar/NavBar';

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
    </div>
  );
}

export default App;
