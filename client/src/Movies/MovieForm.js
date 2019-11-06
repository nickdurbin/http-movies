import React, { Component } from 'react';
import axios from 'axios';

export default class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        title: '',
        director: '',
        metascore: '',
        stars: []
      }
    };
  }
  
  updatedMovie = (e, id, movie) => {
    e.preventDefault()
    axios
    .put(`http://localhost:5000/api/movies/${id}`, movie)
    .then(res => 
      console.log(res.data))
      this.props.history.push('/movies')
    .catch(err => 
      console.log(err.response));
  }

  handleChange = (e) => {
   this.setState({
     ...this.movie, 
   [e.target.name]: e.target.value
    })
  } 

  render () {
    return (
    <div className='formContainer'>
      <form key={this.props.match.params.id} onSubmit={() => 
        this.updateMovie(this.state.movie.id, this.state.movie)}>

        <input 
          type='text'
          name='title'
          placeholder='Title'
          value={this.state.movie.title}
          onChange={this.handleChange}
        />

        <input 
          type='text'
          name='director'
          placeholder='Director'
          value={this.state.movie.director}
          onChange={this.handleChange}
        />

        <input 
          type='text'
          name='metascore'
          placeholder='Metascore'
          value={this.state.movie.metascore}
          onChange={this.handleChange}
        />

        <input 
          type='text'
          name='stars'
          placeholder='stars'
          value={this.state.movie.stars}
          onChange={this.handleChange}
        />

        <button type='submit'>
          Submit
        </button>
      </form>
    </div>
  )}
}