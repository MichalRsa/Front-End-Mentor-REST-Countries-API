import React, { useContext } from "react";
import { DataContext } from "./contexts/DataContext";
import { ThemeContext } from "./contexts/ThemeContext";

import styles from "./app.module.scss";

import Main from "./components/Main";
import Loading from "./components/Loading/Loading";

const App = () => {
  const { darkTheme } = useContext(ThemeContext);
  const { loading } = useContext(DataContext);
  return (
    <div className={darkTheme ? styles.darkTheme : null}>
      {loading ? <Loading /> : <Main />}
    </div>
  );
};

export default App;
