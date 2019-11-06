import React from 'react';

function MovieForm(props) {
  


  return (
    <div className='formContainer'>
      <form>

        <input 
          type='text'
          name='title'
          placeholder='Title'
          value={this.state.movie.title}
        />

        <input 
          type='text'
          name='director'
          placeholder='Director'
          value={this.state.movie.director}
        />

        <input 
          type='text'
          name='metascore'
          placeholder='Metascore'
          value={this.state.movie.metascore}
        />

        <input 
          type='text'
          name='actors'
          placeholder='Actors'
          value={this.state.movie.actors}
        />

      </form>
    </div>
  )
}

export default MovieForm;