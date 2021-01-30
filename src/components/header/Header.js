import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import styles from './header.module.scss';

import ModeSwitch from './mode switch/ModeSwitch';

const Header = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <header
      className={`${styles.header} ${darkTheme ? styles.darkTheme : null}`}
    >
      <h1> Where in the world?</h1>
      <ModeSwitch />
    </header>
  );
};

export default Header;
