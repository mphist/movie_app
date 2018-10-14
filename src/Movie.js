import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';


class Movie extends Component{

  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired

  }

  render(){
    console.log('movie render');
    return(
      <div className="Movie">
        <div className="Movie_Column">
          <MoviePoster poster={this.props.poster} alt={this.props.title} />
        </div>
        <div className="Movie_Column">
          <h1>{this.props.title}</h1>
          <div className="Movie_Genres">
            {this.props.genres.map(genre => <MovieGenre genre={genre} />)}
          </div>
          <p className="Movie_Synopsis">
            {this.props.synopsis}
          </p>
        </div>
      </div>

    )
  }
}

// "Dumb component" -> not a class extending Component
function MovieGenre({genre}){
  return(
    <span className="Movie_Genre">{genre} </span>
  )
}

class MoviePoster extends Component{
  render(){
    return(
      <img src={this.props.poster} alt={this.props.title} title={this.props.title} />
    )
  }
}

export default Movie; // Movie.js
