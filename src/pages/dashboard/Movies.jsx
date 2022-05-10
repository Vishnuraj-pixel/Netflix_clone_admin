import React from "react";
import CreateMovie from "../../components/CreateMovie";
import MovieList from "../../components/MovieList";

function Movies() {
  return (
    <div className="flex-box">
      <MovieList />
      <CreateMovie />
    </div>
  );
}

export default Movies;
