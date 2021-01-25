import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../contexts/DataContext';

const Country = ({ id }) => {
  const { countries } = useContext(DataContext);

  const [country, setCountry] = useState(() =>
    countries.find((country) => country.name === id)
  );
  const [borders, setBorders] = useState(() => {
    return country.borders
      .map((border) =>
        countries.filter((country) => border === country.alpha3Code)
      )
      .flat();
  });

  // useEffect(() => {
  //   let searchedCountry;
  //   let searchedCountryBorders;
  //   setLoading(false);
  //   setCountry(
  //     (searchedCountry = renderedList.find(
  //       (country) => country.name.toLowerCase() === id.toLowerCase()
  //     ))
  //   );

  //   setBorders(searchedCountryBorders);
  //   console.log(searchedCountryBorders);
  //   // console.log(loading);
  // }, [id]);

  console.log(countries);
  console.log(country);
  console.log(borders);

  // if (loading) return <div>...loading</div>;

  return (
    <>
      <div>{country.name}</div>
      <div>
        {borders.map((border) => (
          <Link to={border.name}>{border.name}</Link>
        ))}
      </div>
    </>
  );
};

export default Country;
