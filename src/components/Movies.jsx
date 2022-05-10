import React from "react";
import styled from "styled-components";
import Sort from "./Sort";
import Grid from "./GridView";
import List from "./ListView";

function Movies() {
  return (
    <Container>
      <Sort />
      <Grid />
      <List />
    </Container>
  );
}

export default Movies;

const Container = styled.section`
  margin-top: 2rem;
`;
