import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem('theme') === 'true' || false
  );

  const changeTheme = () => {
    if (darkTheme) {
      localStorage.setItem('theme', 'false');
      setDarkTheme(false);
    } else {
      localStorage.setItem('theme', 'true');
      setDarkTheme(true);
    }
  };

  return (
    <ThemeContext.Provider value={{ changeTheme, darkTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
