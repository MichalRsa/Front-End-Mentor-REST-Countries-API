import React, { useContext } from 'react';
import { DataContext } from './contexts/DataContext';
import { ThemeContext } from './contexts/ThemeContext';

import styles from './app.module.scss';

import CountriesList from './components/CountriesList';

const App = () => {
  const { darkTheme } = useContext(ThemeContext);
  const { loading } = useContext(DataContext);
  return (
    <div className={darkTheme ? styles.darkTheme : null}>
      {loading ? <h1>loading...</h1> : <CountriesList />}
    </div>
  );
};

export default App;
