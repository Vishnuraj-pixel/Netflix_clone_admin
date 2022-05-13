import React from "react";
import styled from "styled-components";
import Sort from "./Sort";
import Grid from "./GridView";
import List from "./ListView";

const Movies = () => {
  return (
    <Container>
      <Sort />
      <div className="movie-list">
        <Grid />
        {/* <List /> */}
      </div>
    </Container>
  );
};

export default Movies;

const Container = styled.section`
  margin-top: 2rem;
  .movie-list {
    margin: 22px 0 22px 0;
  }
`;
