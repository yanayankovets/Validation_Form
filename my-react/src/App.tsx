import React from 'react';
import './App.css';
import {Form} from "./components/Form/Form"
import { useContext } from "react";
import { ThemeContext } from "./components/ThemeProvider";
import {StyledThemeChangeButton} from "./components/Buttons/ThemeChangeButton.styled";

const App: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkTheme = theme === "dark";

  return (
    <div>
      <StyledThemeChangeButton onClick={toggleTheme} isDarkTheme={isDarkTheme}>
        Switch to the {theme === "light" ? "dark" : "light"} mode
      </StyledThemeChangeButton>
      <Form/>
    </div>
  );
};

export default App;
