import React, {Component} from 'react';
import './App.css';
import List from './components/List';
import MainSearch from './components/MainSearch'
import {apiKey, url} from './apiKey';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          movies: []
      };
  }

  fetchMovies = () => {
    console.log(url + apiKey + "&query=Matrix");
    fetch(url + apiKey + "&query=Matrix")
    .then(data => data.json())
    .then(data => {
      console.log(data.results)
      this.setState({ movies: data.results})
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <List movies={this.state.movies} />
          <MainSearch fetchMovies={this.fetchMovies} />
        </div>
      </div>
    )
  }
}

export default App;