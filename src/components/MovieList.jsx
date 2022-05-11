import Container from "../assets/styles/MoviesList";

import MovieFilter from "./MovieFilter";
import Movies from "./Movies";

const MovieList = () => {
  // const [loading, setLoading] = useState(true);
  return (
    <Container>
      {/* {loading && <Loading />} */}
      <MovieFilter />
      <Movies />
    </Container>
  );
};

export default MovieList;
