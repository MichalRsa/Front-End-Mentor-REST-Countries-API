import React, { useState } from 'react';

import styles from './searchingTools.module.scss';

const SearchBox = ({ searchForCountry }) => {
  const [input, setInput] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <form onSubmit={(e) => searchForCountry(e, input)}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search for a country..."
          onChange={handleChange}
        />
        {/* <button>lupka</button> */}
      </form>
    </>
  );
};

export default SearchBox;
