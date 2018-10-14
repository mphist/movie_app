import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';
import Movie from './Movie.js';


// poster data
const movieImages = [
  "https://hungergamesnet.files.wordpress.com/2014/01/catchingfire-hungergames.jpg?w=869",
  "https://hungergamesnet.files.wordpress.com/2014/01/catchingfire-hungergames.jpg?w=869",
  "https://hungergamesnet.files.wordpress.com/2014/01/catchingfire-hungergames.jpg?w=869",
  "https://hungergamesnet.files.wordpress.com/2014/01/catchingfire-hungergames.jpg?w=869"
]

// Use App (comes default) as a movie list component
class App extends Component {

  // When state is updated, render() runs again
  state = {

  }

  componentDidMount(){
    setTimeout(function(){
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "https://hungergamesnet.files.wordpress.com/2014/01/catchingfire-hungergames.jpg?w=869"
          },
          {
            title: "Full Metal Jacket",
            poster: "https://hungergamesnet.files.wordpress.com/2014/01/catchingfire-hungergames.jpg?w=869"
          },
          {
            title: "Oldboy",
            poster: "https://hungergamesnet.files.wordpress.com/2014/01/catchingfire-hungergames.jpg?w=869"
          },
          {
            title: "Star Wars",
            poster: "https://hungergamesnet.files.wordpress.com/2014/01/catchingfire-hungergames.jpg?w=869"
          },
          {
            title: "Transporter",
            poster: "https://hungergamesnet.files.wordpress.com/2014/01/catchingfire-hungergames.jpg?w=869"
          }
        ]
      })
    }.bind(this), 2000)
  }
/*
  _renderMovies = () => {
    const movies = this.state.movies.map(function(movie, index){
      return(<Movie title={movie.title} poster={movie.poster} key={index} />)
    })
    return movies;
  }
*/
  _renderMovies = function() {
    const movies = this.state.movies.map(function(movie, index){
      return(<Movie title={movie.title} poster={movie.poster} key={index} />)
    })
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
      return (
        <div className="App">
        {
          this._renderMovies()
        }
        </div>
      );
    }
    else {
      return (
        <div className="App">
        {
          'Loading...'
        }
        </div>
      );
    }
  }
}
export default App;
