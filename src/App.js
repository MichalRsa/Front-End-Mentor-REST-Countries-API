import React, { useContext } from 'react';
import { DataContext } from './contexts/DataContext';

import './app.module.scss';

import CountriesList from './components/CountriesList';

const App = () => {
  const { loading } = useContext(DataContext);
  return <div>{loading ? <h1>loading...</h1> : <CountriesList />}</div>;
};

export default App;
