import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './MovieList';

function MovieForm(props) {
  const [movie, setMovie] = useState({
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: []
  })

  useEffect(() => {
    axios.get(`http://localhost:5000/api/movies/${props.match.params.id}`)
    .then(res => {
      setMovie(res.data)
    })
    .catch(err => {
      console.log(err.response);
    })
  }, [props.match.params.id])
    

  const handleChange = (e) => {
    setMovie({
      ...movie, 
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  } 

  const handleSubmit = (event) => {
		event.preventDefault()
		
		axios.put(`http://localhost:5000/api/movies/${movie.id}`, movie)
			.then(result => {
				props.history.push("/")
			})
			.catch(error => {
				console.log(error)
			})
	}

return (
  <div className='formContainer'>
    <form onSubmit={handleSubmit}>

      <input 
        type='text'
        name='title'
        placeholder='Title'
        value={movie.title}
        onChange={handleChange}
      />

      <input 
        type='text'
        name='director'
        placeholder='Director'
        value={movie.director}
        onChange={handleChange}
      />

      <input 
        type='text'
        name='metascore'
        placeholder='Metascore'
        value={movie.metascore}
        onChange={handleChange}
      />

      {movie.stars.map((star, index) => (
        <input 
          key={index}
          type='text'
          name='stars'
          placeholder='stars'
          value={star}
          onChange={(e) => handleChange(star).split(' ')}
        />
      ))}

      <button type='submit'>
        Submit
      </button>
    </form>
  </div>
  )
}


export default MovieForm;