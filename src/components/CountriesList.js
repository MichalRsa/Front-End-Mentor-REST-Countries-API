import React, { useContext, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";

import styles from "./CountriesList.module.scss";

import Header from "./header/Header";
import List from "./list/List";
import Filter from "./searchingTools/Filter";
import SearchBox from "./searchingTools/SearchBox";
import Country from "./country/Country";

const CountriesList = () => {
  const { countries } = useContext(DataContext);

  const [list, setList] = useState(countries);
  const [region, setRegion] = useState(countries);

  const selectRegion = (region) => {
    const list = countries.filter((country) => country.region === region);
    if (region === "All") {
      setList(countries);
      setRegion(countries);
    } else {
      setRegion(list);
      setList(list);
    }
  };

  const searchForCountry = (e, country) => {
    e.preventDefault();

    setList(
      region.filter((listCountry) =>
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
              <Filter handleFormChange={selectRegion} region={region} />
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
