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
          searchInput: '',
          currentMovie: null
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

  viewDetails = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id == id);
    const selectedMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
    this.setState({ currentMovie : selectedMovie });
  }

  render() {
    return (
      <>
        <div className="container-fluid p-0 banner">
          <img src="https://www.jahangeer.com/wp-content/uploads/2014/12/2400x780_Movie2014Banner.jpg" alt="movie banner" />
        </div>
        <div className="container">
          <div className="row pt-4">
            <h1>Movie Finder</h1>
          </div>
            <MainSearch handleSubmit={this.handleSubmit} handleSearchInput={this.handleSearchInput} />
            <List movies={this.state.movies} />
        </div>
      </>
    )
  }
}

export default App;