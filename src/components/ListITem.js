import { Link } from 'react-router-dom';

const ListItem = ({ name, population, region, capital }) => {
  return (
    <Link to={name}>
      <div>
        <h2>{name}</h2>
        <p>
          <span>Population:</span>
          {population}
        </p>
        <p>
          <span>Region:</span>
          {region}
        </p>
        <p>
          <span>Capital:</span>
          {capital}
        </p>
      </div>
    </Link>
  );
};

export default ListItem;
