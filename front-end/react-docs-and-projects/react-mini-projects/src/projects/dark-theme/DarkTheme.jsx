import { createContext, useContext, useState } from "react";

// Create a context with a default value
const ThemeContext = createContext();

export default function DarkTheme() {
  const [theme, setTheme] = useState("light"); // Light or dark theme

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
      <p
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
        deserunt totam quasi iusto, possimus nesciunt corporis, natus facere
        eius vitae voluptatum voluptates neque officiis eum accusamus quia
        libero nulla autem!
      </p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}
