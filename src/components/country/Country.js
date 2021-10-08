import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { DataContext } from '../../contexts/DataContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { arrayToJsxEl } from '../../utils/arrayToJsxEl';
import Button from '../Button/Button';
import Loading from '../Loading/Loading';
import NotFound from '../notFound/NotFound';

import styles from './country.module.scss';

const Country = () => {
  let { type, id } = useParams();
  const { countries } = useContext(DataContext);
  const { darkTheme } = useContext(ThemeContext);
  const history = useHistory();

  const [country, setCountry] = useState();
  const [borders, setBorders] = useState();
  const [loading, setLoading] = useState(true);
  const [prevLocation, setLocation] = useState(null);

  useEffect(() => {
    let country;
    (() => (country = countries.find((country) => country.URL === type)))();
    setCountry(country);

    if (!country) {
      setLoading(false);
      return;
    }
    setBorders(() => {
      // if (country && country.borders) {
      if (country && Array.isArray(country.borders)) {
        return country.borders
          .map((border) => {
            console.log('BORDER', border);
            return countries.filter((country) => {
              // border === country.aa3 &&
              border === country.cca3 &&
                console.log('IS BORDER', border === country.cca3);
              // console.log(country.cca3);
              return border === country.cca3;
            });
          })
          .flat();
      }
      // }
    });
    setLoading(false);
    setLocation(history.location.state);
    // });
  }, [type, id]);
  // console.log('BORDERS', borders);
  // console.log('BORDERS', country && country.borders);

  const renderButton = () => {
    const smth = () =>
      prevLocation === undefined
        ? {
            action: () => history.goBack(),
            name: 'Home',
          }
        : { action: () => history.goBack(), name: 'Back' };

    return <Button action={smth().action} text={smth().name} />;
  };
  console.log(prevLocation);
  console.log(history.location);

  if (loading) return <Loading />;

  return !country ? (
    <NotFound />
  ) : (
    <div
      className={`${styles.countryPage} ${darkTheme ? styles.darkTheme : null}`}
    >
      {renderButton()}
      <div className={styles.flagContainer}>
        <img className={styles.flagImg} src={country.flags.svg} alt='' />
      </div>
      <div className={styles.details}>
        <h2>{country.name.common}</h2>
        <p>
          <span className={styles.span}>Native Name:</span>{' '}
          {
            country.name.nativeName[
              `${Object.keys(country.name.nativeName)[0]}`
            ].official
          }
        </p>
        <p>
          <span className={styles.span}>Population:</span> {country.population}
        </p>
        <p>
          <span className={styles.span}>Region:</span> {country.region}
        </p>
        <p>
          <span className={styles.span}>Sub Region:</span> {country.subregion}
        </p>
        <p>
          <span className={styles.span}>Capital:</span> {country.capital}
        </p>
        <p>
          <span className={styles.span}>Top Level Domain:</span>{' '}
          {country.tld[0]}
        </p>
        {arrayToJsxEl(country.currencies, 'Currencies', 'Currency')}
        {arrayToJsxEl(country.languages, 'Languages', 'Language')}
      </div>
      {Array.isArray(borders) && (
        <div className={styles.borderCountries}>
          <h3>Border Countries:</h3>
          {borders.map((border) => (
            <Link
              className={`${styles.borderButton} ${
                darkTheme ? styles.darkTheme : null
              }`}
              to={{
                pathname: `/${border.regionURL}/${border.URL}`,
                state: country.name.common,
              }}
              key={border.name.common}
            >
              {border.name.common}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Country;
