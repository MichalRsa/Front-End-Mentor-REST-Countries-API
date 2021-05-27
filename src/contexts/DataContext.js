import React, { useState, createContext, useEffect } from "react";
import nameToURL from "../utils/nameToURL";

export const DataContext = createContext();

const API = "https://restcountries.eu/rest/v2/all";

const DataContextProvider = (props) => {
  const [countries, setCountries] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API)
      .then((response) => {
        if (response.ok) return response.json();
        throw Error(response.status);
      })
      .then((data) => {
        const countries = data.map((country) => ({
          ...country,
          URL: nameToURL(country.name),
          regionURL: nameToURL(country.region),
        }));
        setCountries(countries);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <DataContext.Provider value={{ countries, loading }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
