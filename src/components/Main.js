import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Header from './header/Header';
import CountiresList from './CountriesList/CountriesList';
import Country from './country/Country';
import NotFound from './notFound/NotFound';

const Main = () => {
  return (
    <BrowserRouter basename='/Front-End-Mentor-REST-Countries-API'>
      <Header />
      <Switch>
        <Route path='/:id' exact render={() => <CountiresList />} />
        <Route path='/:id/:type' exact render={() => <Country />} />

        <Redirect from='/' exact to='/all' />
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
