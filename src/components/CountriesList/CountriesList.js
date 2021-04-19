import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import List from "../list/List";
import Filter from "../searchingTools/Filter";
import SearchBox from "../searchingTools/SearchBox";

import styles from "../Main.module.scss";

const CountriesList = () => {
  const { countries } = useContext(DataContext);
  const { id } = useParams();

  const [list, setList] = useState(countries);
  const [region, setRegion] = useState(countries);

  useEffect(() => {
    selRegion();
    console.log("działam");
  }, [id]);

  const selectRegion = (region) => {
    // const list = countries.filter((country) => country.region === region);
    // if (region === "All") {
    //   setList(countries);
    //   setRegion(countries);
    // } else {
    //   setRegion(list);
    //   setList(list);
    // }
  };
  const selRegion = () => {
    const list = countries.filter((country) => country.region === id);
    if (id === undefined) {
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
    <>
      <div className={styles.searchForCountry}>
        <Filter handleFormChange={selectRegion} region={region} />
        <SearchBox searchForCountry={searchForCountry} />
      </div>
      <List list={list} />
    </>
  );
};

export default CountriesList;
