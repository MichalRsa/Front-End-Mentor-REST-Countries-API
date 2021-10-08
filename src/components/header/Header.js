import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

import styles from './header.module.scss';

import ModeSwitch from './mode switch/ModeSwitch';

const Header = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <header
      className={`${styles.header} ${darkTheme ? styles.darkTheme : null}`}
    >
      <Link
        className={`${styles.pageName} ${darkTheme ? styles.darkTheme : null}`}
        to='/'
      >
        <h1> Where in the world?</h1>
      </Link>

      <ModeSwitch />
    </header>
  );
};

export default Header;
