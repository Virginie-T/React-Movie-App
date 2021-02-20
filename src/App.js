import React, {Component} from 'react';
import './App.css';
import List from './components/List';
import MainSearch from './components/MainSearch'
import {apiKey, searchURL, upcomingURL, topRatedURL, popularURL} from './apiKey';
import { Button } from 'reactstrap';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          movies: [],
          searchInput: '',
          currentMovie: null
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

  getUpcomingMovies = () => {
    fetch(upcomingURL + apiKey)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies: data.results})
    })
  }

  getTopRatedMovies = () => {
    fetch(topRatedURL + apiKey)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies: data.results})
    })
  }

  getPopularMovies = () => {
    fetch(popularURL + apiKey)
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
          <img src="https://i.postimg.cc/htK9C9mr/long-Banner.jpg" alt="Movie Banner" />
        </div>
        <div className="container">
          <div className="row pt-5">
            <h1>Movie Finder</h1>
          </div>
            <MainSearch searchMovies={this.searchMovies} handleSearchInput={this.handleSearchInput} />
            <Button onClick={this.getUpcomingMovies}>Upcoming Movies</Button>
            <Button onClick={this.getTopRatedMovies}>Top Rated Movies</Button>
            <Button onClick={this.getPopularMovies}>Popular Movies</Button>
            <List movies={this.state.movies} />
        </div>
      </>
    )
  }
}

export default App;