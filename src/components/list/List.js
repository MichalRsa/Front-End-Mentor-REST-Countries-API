import React, { useContext } from 'react';
import ListItem from '../listItem/ListITem';
import { DataContext } from '../../contexts/DataContext';

import styles from './list.module.scss';

const List = ({ list }) => {
  return (
    <ul className={styles.countryList}>
      {list.map((country) => (
        <li key={country.name}>
          <ListItem {...country} />
        </li>
      ))}
    </ul>
  );
};

export default List;
