import React, {Component} from 'react';
import './App.css';
import List from './components/List';
import MainSearch from './components/MainSearch'
import {apiKey, url} from './apiKey';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          movies: [],
          searchInput: ''
      };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(url + apiKey + "&query=" + this.state.searchInput)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies: data.results})
    })
  }

  handleSearchInput = (event) => {
    this.setState({searchInput: event.target.value});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <MainSearch handleSubmit={this.handleSubmit} handleSearchInput={this.handleSearchInput} />
        </div>
        <div className="row">
          <List movies={this.state.movies} />
        </div>
      </div>
    )
  }
}

export default App;