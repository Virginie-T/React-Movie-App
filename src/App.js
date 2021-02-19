import React, {Component} from 'react';
import './App.css';
import List from './components/List';
import {MOVIES} from "./shared/movies"

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          movies: MOVIES
      };
  }
  render() {
    return (
      <div>
        <List movies={this.state.movies} />
      </div>
    )
  }
}

export default App;