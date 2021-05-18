import React, { useContext, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import List from "../list/List";
import Filter from "../searchingTools/Filter";
import SearchBox from "../searchingTools/SearchBox";

import styles from "../Main.module.scss";

const CountriesList = () => {
  const { countries } = useContext(DataContext);
  const { id } = useParams();

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchString = searchParams.get("search");
  // console.log(searchString);

  const [list, setList] = useState(countries);
  const [region, setRegion] = useState(countries);
  const [loading, setLoading] = useState(true);
  // console.log(list);

  useEffect(() => {
    if (searchString !== null) {
      selRegion(searchString);

      setLoading(false);
      return;
    }
    selRegion();
    setLoading(false);
  }, [id, search]);

  const selRegion = (searchString) => {
    if (id === undefined || id === "All") {
      if (searchString) {
        const lowCaseString = searchString.toLowerCase();
        setRegion(countries);
        setList(
          countries.filter((listCountry) =>
            listCountry.name.toLowerCase().includes(lowCaseString)
          )
        );
        return;
      }
      setList(countries);
      setRegion(countries);
    } else {
      const list = countries.filter((country) => country.region === id);
      if (searchString) {
        const lowCaseString = searchString.toLowerCase();
        setRegion(list);
        setList(
          list.filter((listCountry) =>
            listCountry.name.toLowerCase().includes(lowCaseString)
          )
        );
        return;
      }
      setRegion(list);
      setList(list);
    }
  };

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <div className={styles.searchForCountry}>
        <Filter />
        <SearchBox />
      </div>
      <List list={list} />
    </div>
  );
};

export default CountriesList;
