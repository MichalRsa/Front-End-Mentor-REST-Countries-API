import React, { useContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { DataContext } from '../contexts/DataContext';

import styles from './CountriesList.module.scss';

import Header from './header/Header';
import List from './list/List';
import Filter from './searchingTools/Filter';
import SearchBox from './searchingTools/SearchBox';
import Country from './country/Country';

const CountriesList = () => {
  const { countries } = useContext(DataContext);

  const [list, setList] = useState(countries);
  const [country, setCountry] = useState();

  const renderList = (selectedRegion) => {
    if (selectedRegion === 'All') {
      setList(countries);
    } else {
      const list = countries.filter(
        (country) => country.region === selectedRegion
      );
      setList(list);
    }
  };

  const searchForCountry = (e, country) => {
    e.preventDefault();
    setCountry(country);
    setList(
      list.filter((listCountry) =>
        listCountry.name.toLowerCase().includes(country)
      )
    );
  };
  return (
    <BrowserRouter>
      <Header />
      <Route
        path="/"
        exact
        render={() => (
          <>
            <div className={styles.searchForCountry}>
              <Filter renderList={renderList} />
              <SearchBox searchForCountry={searchForCountry} />
            </div>
            <List list={list} />
          </>
        )}
      />
      <Route path="/:id" exact render={() => <Country />} />
    </BrowserRouter>
  );
};

export default CountriesList;
