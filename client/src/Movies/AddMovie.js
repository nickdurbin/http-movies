import React, { useState } from 'react';
import axios from 'axios';

function AddMovie() {
  const [newMovie, setNewMovie] = useState({
    id: '',
    title: "",
    director: "",
    metascore: '',
    stars: []
  }); 

  const handleChange = event => {
    setNewMovie({
      ...newMovie,
      [event.target.name]: event.target.value
    });
  };

  const handleStars = (e) => {
    setNewMovie({
      ...newMovie, 
      stars: [e.target.value]
    })
    console.log(e.target.value)
  } 

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`http://localhost:5000/api/movies`, newMovie)
      .then(response => {
        console.log(response.data, "Movie added.")
        setNewMovie(response.data);
      })
      .catch(error => {
        console.log(error, "Your movie wasn't added.")
      })
  } 

  return (
    <div className="movieForm">
      <form name="id" value={newMovie.id} onSubmit={event => handleSubmit(event)} onChange={event => handleChange(event)}>
        <h1>Add Your Favorite Movie</h1>
        <label>
          Title:
          <input type="text" name="title" value={newMovie.title} onChange={event => handleChange(event)} />
        </label>
        <label>
          Director:
          <input type="text" name="director" value={newMovie.director} onChange={event => handleChange(event)} />
        </label>
        <label>
          Metascore:
          <input type="text" name="metascore" value={newMovie.metascore} onChange={event => handleChange(event)} />
        </label>
        <label>
          Stars:
          <input type="text" name="stars" value={newMovie.stars} onChange={e => handleStars(e, newMovie)} />
        </label>
        <button className="formButton">Submit</button>
    </form>
    </div>
  )
}

export default AddMovie;