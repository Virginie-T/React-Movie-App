import React, {Component} from 'react';
import './App.css';
import List from './components/List';
import TopRatedMoviesList from './components/TopRatedMovies';
import PopularMoviesList from './components/PopularMovies';
import MainSearch from './components/MainSearch'
import {apiKey, searchURL} from './apiKey';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          movies: [],
          searchInput: ''
      };
  }

  searchMovies = (event) => {
    event.preventDefault();

    fetch(searchURL + apiKey + "&query=" + this.state.searchInput)
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
      <>
        <div className="container-fluid p-0 banner">
          <img src="https://i.postimg.cc/htK9C9mr/long-Banner.jpg" alt="Movie Banner" />
        </div>
        <div className="container">
          <div className="row pt-5">
            <h1>Movie Finder</h1>
          </div>
            <MainSearch searchMovies={this.searchMovies} handleSearchInput={this.handleSearchInput} />
            <PopularMoviesList />
            <TopRatedMoviesList />
            <List movies={this.state.movies} />
        </div>
      </>
    )
  }
}

export default App;