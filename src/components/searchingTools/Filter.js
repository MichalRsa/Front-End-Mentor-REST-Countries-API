import React, { useState } from 'react';

import styles from './searchingTools.module.scss';

const Filter = ({ renderList }) => {
  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const [region, setRegion] = useState();

  const handleFormChange = (event) => {
    const region = event.target.value;
    setRegion(region);
    renderList(region);
  };
  return (
    <select
      className={styles.selectRegion}
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
