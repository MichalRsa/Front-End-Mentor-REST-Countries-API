import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import styles from './searchingTools.module.scss';

const SearchBox = ({ searchForCountry }) => {
  const { darkTheme } = useContext(ThemeContext);
  const [input, setInput] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <form onSubmit={(e) => searchForCountry(e, input)}>
        <input
          className={`${styles.input} ${darkTheme ? styles.darkTheme : null}`}
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
