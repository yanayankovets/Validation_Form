import React, { useState } from "react";

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext);

export const ThemeProvider: React.FC<{ children: any }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const color = theme === "light" ? "#3a983a" : "#6f1fbf";
  const backgroundColor = theme === "light" ? "#cdff8f" : "#d0aef9";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};