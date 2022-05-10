import { useEffect, useState, useReducer } from "react";
import Container from "../assets/styles/MoviesList";
import Loading from "../components/Loading";

import MovieFilter from "./MovieFilter";
import Movies from "./Movies";

function MovieList() {
  // const [loading, setLoading] = useState(true);
  return (
    <Container>
      {/* {loading && <Loading />} */}
      <MovieFilter />
      <Movies />
    </Container>
  );
}

export default MovieList;
