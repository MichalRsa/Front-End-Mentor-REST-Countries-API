import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import regionList from "../../utils/regionList";

import styles from "./searchingTools.module.scss";

const Filter = () => {
  const { id } = useParams();
  const { darkTheme } = useContext(ThemeContext);
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const [filterValue, setFilterValue] = useState(id);
  // const [input, setInput] = useState();
  useEffect(() => {
    setFilterValue(id);
    // regionList(id);
  }, [id]);

  console.log(id);
  console.log(filterValue);

  return (
    <div
      className={`${styles.selectRegion} ${darkTheme ? styles.darkTheme : ""}`}
      value={filterValue}
    >
      <div
        className={`${styles.container} ${darkTheme ? styles.darkTheme : ""}`}
      >
        {regions.map((region) => (
          <Link
            to={region}
            key={region}
            className={`${styles.link} ${darkTheme ? styles.darkTheme : ""} ${
              region === id ? styles.show : styles.hide
            }`}
            id={region}
          >
            {region}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Filter;
