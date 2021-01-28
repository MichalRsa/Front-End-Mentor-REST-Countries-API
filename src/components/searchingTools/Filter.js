import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import styles from './searchingTools.module.scss';

const Filter = ({ renderList }) => {
  const { darkTheme } = useContext(ThemeContext);
  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const [region, setRegion] = useState();

  const handleFormChange = (event) => {
    const region = event.target.value;
    setRegion(region);
    renderList(region);
  };
  return (
    <select
      className={`${styles.selectRegion} ${
        darkTheme ? styles.darkTheme : null
      }`}
      onChange={handleFormChange}
      value={region}
    >
      {regions.map((region) => (
        <option value={region} key={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default Filter;
