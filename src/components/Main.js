// import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
// import { DataContext } from "../contexts/DataContext";

// import styles from "./Main.module.scss";

import Header from "./header/Header";
// import List from "./list/List";
// import Filter from "./searchingTools/Filter";
// import SearchBox from "./searchingTools/SearchBox";
import CountiresList from "./CountriesList/CountriesList";
import Country from "./country/Country";

const Main = () => {
  // const { countries } = useContext(DataContext);

  // const [list, setList] = useState(countries);
  // const [region, setRegion] = useState(countries);

  // const selectRegion = (region) => {
  //   const list = countries.filter((country) => country.region === region);
  //   if (region === "All") {
  //     setList(countries);
  //     setRegion(countries);
  //   } else {
  //     setRegion(list);
  //     setList(list);
  //   }
  // };

  // const searchForCountry = (e, country) => {
  //   e.preventDefault();

  //   setList(
  //     region.filter((listCountry) =>
  //       listCountry.name.toLowerCase().includes(country)
  //     )
  //   );
  // };
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/:id" exact render={() => <CountiresList />} />
        <Route path="/:id/:type" exact render={() => <Country />} />

        <Redirect from="/" exact to="/All" />
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
