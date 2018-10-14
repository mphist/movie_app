import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js';


// Use App (comes default) as a movie list component
class App extends Component {

  // When state is updated, render() runs again
  state = {

  }

  // Good practice to call functions in componentDidMount()
  // Bad practice to write functions in it
  componentDidMount(){
    this._getMovies();
    console.log(this.state.movies);
    this.refs.iScroll.addEventListener("scroll", () => {
      if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >=this.refs.iScroll.scrollHeight){
        this._getMovies();
      }
    });

  }


/*
  _renderMovies = () => {
    const movies = this.state.movies.map(function(movie, index){
      return(<Movie title={movie.title} poster={movie.poster} key={index} />)
    })
    return movies;
  }
*/

  _getMovies = async () => {
    const movies = await this._callApi() // calls _callApi() on await mode => wait for _callApi() to "finish" and assign the return value to movies
    this.setState({
      movies

    })
    console.log('getmovies');
  }


  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _renderMovies = function() {
    const movies = this.state.movies.map(movie => {
      return(
        <Movie
          title={movie.title_english}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      );
    });
    console.log('_rendermovies');
    return movies;

  }

  render() {
/* Use of Terniary operator. Cannot have if-else in return() in React
    return (
      <div className="App">
        {
          this.state.movies ? this._renderMovies() : 'Loading...'
        }
      </div>
    ); */

    // Use of If-else
    if (this.state.movies){
      console.log('render');
      return (
        <div ref="iScroll" style={{ height: "1000px", overflow: "auto" }}>
        {
          this._renderMovies()

        }
        </div>

      );
    }
    else {
      return (
        <div ref="iScroll" style={{ height: "1000px", overflow: "auto" }}>
        {
          'Loading...'
        }
        </div>
      );
    }
  }
}
export default App;
