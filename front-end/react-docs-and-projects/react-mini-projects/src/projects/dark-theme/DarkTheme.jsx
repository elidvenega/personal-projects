import { createContext, useContext, useState } from 'react';

// Create a context with a default value
const ThemeContext = createContext();

export default function DarkTheme() {
  const [theme, setTheme] = useState('light'); // Light or dark theme

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext); // Access the context value
  
  return (
    <div>
      <button 
        style={{
          background: theme === 'light' ? '#fff' : '#333',
          color: theme === 'light' ? '#000' : '#fff',
        }}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Toggle Theme
      </button>
    </div>
  );
}
