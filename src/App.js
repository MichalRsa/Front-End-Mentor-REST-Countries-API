import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import List from './components/List';
import Filter from './components/Filter';
import Country from './components/Country';

const API = 'https://restcountries.eu/rest/v2/all';

class App extends Component {
  regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  countriesList = [];

  state = {
    renderedList: [],
    selectedRegion: '',
  };

  componentDidMount = () => {
    fetch(API)
      .then((response) => {
        if (response.ok) return response.json();

        throw Error(response.status);
      })
      .then((countriesList) => {
        this.countriesList = countriesList;
        this.setState({
          renderedList: countriesList,
        });
      })
      .catch((error) => console.log(error));
  };

  handleFormChange = (event) => {
    const selectedRegion = event.target.value;
    if (selectedRegion === 'All') {
      this.setState({
        renderedList: this.countriesList,
        selectedRegion: 'All',
      });
    } else {
      const renderedList = this.countriesList.filter(
        (country) => country.region === selectedRegion
      );

      this.setState({
        selectedRegion,
        renderedList,
      });
    }
  };
  render() {
    console.log(this.state.renderedList);
    return (
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={() => (
            <>
              <Filter
                regions={this.regions}
                selectedRegion={this.state.selectedRegion}
                handleFormChange={this.handleFormChange}
              />
              <List countries={this.state.renderedList} />
            </>
          )}
        />
        {this.state.renderedList.length ? (
          <Route
            path="/:id"
            exact
            render={({ match }) => (
              <Country
                id={match.params.id}
                renderedList={this.state.renderedList}
              />
            )}
          />
        ) : null}
      </BrowserRouter>
    );
  }
}

export default App;
