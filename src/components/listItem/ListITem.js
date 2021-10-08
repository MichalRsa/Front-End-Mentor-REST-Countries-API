import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import styles from './list-item.module.scss';
import { ThemeContext } from '../../contexts/ThemeContext';

const ListItem = ({
  flags,
  URL,
  name,
  population,
  regionURL,
  region,
  capital,
}) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <Link
      to={`${regionURL}/${URL}`}
      className={`${styles.link} ${darkTheme ? styles.darkTheme : null}`}
    >
      <div
        className={`${styles.countryCard} ${
          darkTheme ? styles.darkTheme : null
        }`}
      >
        <div className={styles.flagContainer}>
          <img src={flags.svg} alt='' className={styles.flag} />
        </div>
        <div className={styles.detailsContainer}>
          <h2 className={styles.name}>{name.common}</h2>
          <div className={styles.content}>
            <p className={styles.textMargin}>
              <span className={styles.bold}>Population: </span>
              {population}
            </p>
            <p className={styles.textMargin}>
              <span className={styles.bold}>Region: </span>
              {region}
            </p>
            <p className={styles.textMargin}>
              <span className={styles.bold}>Capital: </span>
              {capital}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
