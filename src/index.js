import { render } from 'react-dom';
import React from 'react';
import DataContextProvider from './contexts/DataContext';

import App from './App';

render(
  <DataContextProvider>
    <App />
  </DataContextProvider>,
  document.getElementById('root')
);
