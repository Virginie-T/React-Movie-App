import React, {Component} from 'react';
import List from './List'
import { apiKey, topRatedURL } from './../apiKey';


class TopRatedMoviesList extends Component {
  constructor(props) {
      super(props);
      this.state = {
          topRatedMoviesList: []
      };
  }

    getTopRatedMovies = () => {
        fetch(topRatedURL + apiKey)
        .then(data => data.json())
        .then(data => {
            this.setState({ topRatedMoviesList: data.results})
        })
    }
    
    render() {
        return (
            <div className="container-fluid horizontal">
                {this.getTopRatedMovies()}
                <h3 className="mt-3">Top Rated Movies</h3>
                <List movies={this.state.topRatedMoviesList} />
            </div>
        )
    }
}

export default TopRatedMoviesList;