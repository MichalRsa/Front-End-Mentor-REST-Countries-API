import React, { useState, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";

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
    <div
      className={`${styles.selectRegion} ${
        darkTheme ? styles.darkTheme : null
      }`}
      onChange={handleChange}
      value={input}
    >
      {regions.map((region) => (
        <Link to={region} key={region}>
          {region}
        </Link>
      ))}
    </div>
  );
};

export default Filter;
