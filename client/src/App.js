import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import MovieForm from './Movies/MovieForm';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    const present = savedList.find(el => el.title === movie.title)
    if (!present) {
      setSavedList( [...savedList, movie] );
    } 
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} savedList={savedList} />;
        }}
      />
      <Route
        path='/update-movie/:id'
        render={props => {
          return <MovieForm {...props} />;
        }}
      />
    </>
  );
};

export default App;