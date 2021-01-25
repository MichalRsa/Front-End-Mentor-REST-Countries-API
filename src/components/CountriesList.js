import React, { useContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { DataContext } from '../contexts/DataContext';

import List from './List';
import Filter from './Filter';
import Country from './Country';

const CountriesList = () => {
  const { countries } = useContext(DataContext);

  const [list, setList] = useState(countries);

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
  return (
    <BrowserRouter>
      <Route
        path="/"
        exact
        render={() => (
          <>
            <Filter renderList={renderList} />
            <List list={list} />
          </>
        )}
      />
      <Route
        path="/:id"
        exact
        render={({ match }) => <Country id={match.params.id} />}
      />
    </BrowserRouter>
  );
};

export default CountriesList;
