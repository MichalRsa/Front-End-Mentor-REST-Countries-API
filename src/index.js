import { render } from 'react-dom';
import React from 'react';
import DataContextProvider from './contexts/DataContext';

import App from './App';
import ThemeContextProvider from './contexts/ThemeContext';

render(
  <DataContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </DataContextProvider>,
  document.getElementById('root')
);
