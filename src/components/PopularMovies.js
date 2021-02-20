import React, {Component} from 'react';
import List from './List'
import { apiKey, popularURL } from './../apiKey';


class PopularMoviesList extends Component {
  constructor(props) {
      super(props);
      this.state = {
          popularMoviesList: []
      };
  }

    getPopularMovies = () => {
        fetch(popularURL + apiKey)
        .then(data => data.json())
        .then(data => {
            this.setState({ popularMoviesList: data.results})
        })
    }
    
    render() {
        return (
            <div className="container-fluid horizontal">
                {this.getPopularMovies()}
                <h3 className="mt-3">Popular Movies</h3>
                <List movies={this.state.popularMoviesList} />
            </div>
        )
    }
}

export default PopularMoviesList;