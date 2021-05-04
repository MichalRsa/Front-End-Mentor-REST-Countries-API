import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import regionList from "../../utils/regionList";

import styles from "./searchingTools.module.scss";

const Filter = ({ handleFormChange, region }) => {
  const { id } = useParams();
  const { darkTheme } = useContext(ThemeContext);
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const [filterValue, setFilterValue] = useState(id === undefined ? "All" : id);
  // const [input, setInput] = useState();
  useEffect(() => {
    if (filterValue !== undefined) {
      setFilterValue(id);
      regionList(filterValue);
    }
  }, [filterValue]);

  const handleChange = (e) => {
    handleFormChange(e.target.value);
    setFilterValue(id);
    regionList(id);
  };
  console.log(id);
  console.log(filterValue);

  return (
    <div
      className={`${styles.selectRegion} ${
        darkTheme ? styles.darkTheme : null
      }`}
      onClick={handleChange}
      value={filterValue}
    >
      {regions.map((region) => (
        <Link to={region} key={region} className={styles.link} id={region}>
          {region}
        </Link>
      ))}
    </div>
  );
};

export default Filter;
