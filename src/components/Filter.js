import React, { useState } from 'react';

const Filter = ({ renderList }) => {
  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const [region, setRegion] = useState('All');

  const handleFormChange = (event) => {
    const region = event.target.value;
    setRegion(region);
    renderList(region);
  };
  return (
    <div>
      <form action="">
        <select name="" id="" onChange={handleFormChange} value={region}>
          {regions.map((region) => (
            <option value={region} key={region}>
              {region}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Filter;
