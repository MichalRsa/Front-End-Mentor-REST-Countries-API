import React, { useState, useEffect, useContext } from 'react';

import { ThemeContext } from '../../../contexts/ThemeContext';

import styles from './modeSwitch.module.scss';
import './modeSwitch.module.scss';

const ModeSwitch = () => {
  const { darkTheme, changeTheme } = useContext(ThemeContext);
  // const [togglePosition, setTogglePosition] = useState(
  //   localStorage.getItem('theme') === 'true'
  // );

  // const toggleTheme = () => {

  // }
  return (
    <>
      <label className={styles.switch}>
        <input
          className={`${styles.input} ${styles.switchInput}`}
          type="checkbox"
          onChange={changeTheme}
          checked={darkTheme}
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </>
  );
};

export default ModeSwitch;
