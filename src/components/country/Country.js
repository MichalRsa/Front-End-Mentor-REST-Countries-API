import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useParams, useLocation } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { arrayToJsxEl } from "../../utils/arrayToJsxEl";

import styles from "./country.module.scss";

const Country = () => {
  let { type, id } = useParams();
  const { countries } = useContext(DataContext);
  const { darkTheme } = useContext(ThemeContext);
  const history = useHistory();
  let location = useLocation();

  const [country, setCountry] = useState();
  const [borders, setBorders] = useState();
  const [loading, setLoading] = useState(true);
  const [prevLocation, setLocation] = useState();

  useEffect(() => {
    let country;
    setCountry(
      () => (country = countries.find((country) => country.URL === type))
    );
    setBorders(() => {
      return country.borders
        .map((border) =>
          countries.filter((country) => border === country.alpha3Code)
        )
        .flat();
    });
    setLoading(false);
    setLocation(history.location.state);
  }, [type, id]);

  const renderButton = () => {
    const smth = () =>
      prevLocation === undefined
        ? {
            action: () => history.goBack(),
            name: "Home",
          }
        : { action: () => history.goBack(), name: "Back" };

    return (
      <button
        className={`${styles.button} ${darkTheme ? styles.darkTheme : null}`}
        onClick={smth().action}
      >
        {smth().name}
      </button>
    );
  };
  if (loading) return <div>loading...</div>;

  return (
    <div
      className={`${styles.countryPage} ${darkTheme ? styles.darkTheme : null}`}
    >
      {renderButton()}
      <div className={styles.flagContainer}>
        <img className={styles.flagImg} src={country.flag} alt="" />
      </div>
      <div className={styles.details}>
        <h2>{country.name}</h2>
        <p>
          <span className={styles.span}>Native Name:</span> {country.nativeName}
        </p>
        <p>
          <span className={styles.span}>Population:</span> {country.population}
        </p>
        <p>
          <span className={styles.span}>Region:</span> {country.region}
        </p>
        <p>
          <span className={styles.span}>Sub Region:</span> {country.subRegion}
        </p>
        <p>
          <span className={styles.span}>Capital:</span> {country.capital}
        </p>
        <p>
          <span className={styles.span}>Top Level Domain:</span>{" "}
          {country.topLevelDomain}
        </p>
        {arrayToJsxEl(country.currencies, "Currency", "Currencies")}
        {arrayToJsxEl(country.languages, "Language", "Languages")}
      </div>
      {borders[0] && (
        <div className={styles.borderCountries}>
          <h3>Border Countries:</h3>
          {borders.map((border) => (
            <Link
              className={`${styles.borderButton} ${
                darkTheme ? styles.darkTheme : null
              }`}
              to={{
                pathname: `/${border.regionURL}/${border.URL}`,
                state: country.name,
              }}
              key={border.name}
            >
              {border.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Country;
