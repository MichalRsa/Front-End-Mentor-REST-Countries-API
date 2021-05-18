import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { ThemeContext } from "../../contexts/ThemeContext";

import styles from "./searchingTools.module.scss";

const SearchBox = () => {
  const { darkTheme } = useContext(ThemeContext);
  let history = useHistory();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          history.push(`${history.location.pathname}?search=${input}`);
          // searchForCountry(e, input);
          // setInput("");
        }}
      >
        <input
          className={`${styles.input} ${darkTheme ? styles.darkTheme : null}`}
          type="text"
          placeholder="Search for a country..."
          onChange={handleChange}
          value={input}
        />
        {/* <button>lupka</button> */}
      </form>
    </>
  );
};

export default SearchBox;
