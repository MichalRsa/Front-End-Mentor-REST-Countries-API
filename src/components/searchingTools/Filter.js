import React, { useState, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import styles from "./searchingTools.module.scss";

const Filter = ({ handleFormChange, region }) => {
  const { darkTheme } = useContext(ThemeContext);
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const [input, setInput] = useState();

  const handleChange = (e) => {
    handleFormChange(e.target.value);
    setInput(e.target.value);
  };

  return (
    <select
      className={`${styles.selectRegion} ${
        darkTheme ? styles.darkTheme : null
      }`}
      onChange={handleChange}
      value={input}
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
