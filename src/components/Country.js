import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { DataContext } from '../contexts/DataContext';

const Country = () => {
  let { id } = useParams();
  const { countries } = useContext(DataContext);
  const history = useHistory();

  const [country, setCountry] = useState();
  const [borders, setBorders] = useState();
  const [loading, setLoading] = useState(true);
  const [prevLocation, setLocation] = useState();

  useEffect(() => {
    // console.log('useEffect,', id);
    let country;
    setCountry(
      () => (country = countries.find((country) => country.name === id))
    );
    // console.log(country);
    setBorders(() => {
      return country.borders
        .map((border) =>
          countries.filter((country) => border === country.alpha3Code)
        )
        .flat();
    });
    setLoading(false);
    setLocation(history.location.state);
  }, [id]);

  // console.log(countries);
  // console.log(country);
  // console.log(borders);

  console.log(prevLocation);
  if (loading) return <div>loading...</div>;

  return (
    <>
      {prevLocation === undefined ? (
        <Link to="/">Home</Link>
      ) : (
        <button
          onClick={() => {
            history.goBack();
          }}
        >
          Back
        </button>
      )}
      <div>{country.name}</div>
      <div>{id}</div>
      <div>
        {borders.map((border) => (
          <Link
            to={{ pathname: border.name, state: country.name }}
            key={border.name}
          >
            {border.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Country;
