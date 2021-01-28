import React from 'react';

import styles from './modeSwitch.module.scss';
import './modeSwitch.module.scss';

const ModeSwitch = ({ changeTheme }) => {
  return (
    <>
      <label className={styles.switch}>
        <input
          className={`${styles.input} ${styles.switchInput}`}
          type="checkbox"
          onClick={changeTheme}
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </>
  );
};

export default ModeSwitch;
