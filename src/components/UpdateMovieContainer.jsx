import React from "react";
import styled from "styled-components";
import UpdateMovie from "./UpdateMovie";

const UpdateMovieContainer = React.memo(
  ({ moviesToBeUpdated, updateMovie }) => {
    return (
      <Container>
        {moviesToBeUpdated &&
          moviesToBeUpdated.map((movie) => {
            return (
              <div className="smallContainer" key={movie._id}>
                <span>{movie.name}</span>
                <button
                  className="btn btn-red"
                  onClick={() => updateMovie({ ...movie })}
                >
                  update
                </button>
              </div>
            );
          })}
      </Container>
    );
  }
);

export default UpdateMovieContainer;

const Container = styled.section`
  .smallContainer {
    width: 100%;
    height: 80px;
    padding: 0.375rem 0.75rem;
    border-radius: var(--borderRadius);
    background: var(--backgroundColor);
    border: 1px solid var(--grey-200);
    margin-bottom: 0.56rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
