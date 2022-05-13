import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Container from "../assets/styles/GridView";
import Loading from "./Loading";

const GridView = () => {
  const { loading, movies } = useSelector((store) => store.movie);

  // useEffect(() => {
  //   // setMoviesList(checkCrewMembersAdded());
  // }, [movies]);

  useEffect(() => {
    setTimeout(() => {
      // console.log(moviesList);
    });
  });

  if (movies.crewMembersAdded.length == 0) {
    return <Loading />;
  }

  return (
    <Container>
      {movies.crewMembersAdded &&
        movies.crewMembersAdded.length > 0 &&
        movies.crewMembersAdded.map((movie) => {
          console.log(movie, "movieee");
          return (
            <img
              key={movie._id}
              className="poster"
              src={`http://localhost:9026/${movie.image}`}
              alt={movie.name}
            />
          );
        })}
    </Container>
  );
};

export default GridView;
