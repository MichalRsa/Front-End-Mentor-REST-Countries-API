import React, { useContext } from 'react';
import ListItem from './ListITem';
import { DataContext } from '../contexts/DataContext';

const List = ({ list }) => {
  console.log(list);
  return (
    <div>
      <ul>
        {list.map((country) => (
          <li key={country.name}>
            <ListItem {...country} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
