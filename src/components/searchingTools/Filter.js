import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import regionList from "../../utils/regionList";

import styles from "./searchingTools.module.scss";

const Filter = () => {
  const { id, urls } = useParams();
  const { darkTheme } = useContext(ThemeContext);
  // const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  console.log(urls);

  const regions = [
    { region: "All", regionURL: "all" },
    { region: "Africa", regionURL: "africa" },
    { region: "Americas", regionURL: "americas" },
    { region: "Asia", regionURL: "asia" },
    { region: "Europe", regionURL: "europe" },
    { region: "Ocenia", regionURL: "oceania" },
  ];

  return (
    <div
      className={`${styles.selectRegion} ${darkTheme ? styles.darkTheme : ""}`}
    >
      <div
        className={`${styles.container} ${darkTheme ? styles.darkTheme : ""}`}
      >
        {regions.map(({ region, regionURL }) => (
          <Link
            to={regionURL}
            key={region}
            className={`${styles.link} ${darkTheme ? styles.darkTheme : ""} ${
              regionURL === id ? styles.show : styles.hide
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
