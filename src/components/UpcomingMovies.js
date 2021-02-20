import React, {Component} from 'react';
import List from './List'
import { apiKey, upcomingURL } from './../apiKey';


class UpcomingMoviesList extends Component {
  constructor(props) {
      super(props);
      this.state = {
          upcomingMoviesList: []
      };
  }

    getUpcomingMovies = () => {
        fetch(upcomingURL + apiKey)
        .then(data => data.json())
        .then(data => {
            this.setState({ upcomingMoviesList: data.results})
        })
    }
    
    render() {
        return (
            <div className="container-fluid horizontal">
                {this.getUpcomingMovies()}
                <h3 className="mt-3">Upcoming Movies</h3>
                <List movies={this.state.popularMoviesList} />
            </div>
        )
    }
}

export default UpcomingMoviesList;