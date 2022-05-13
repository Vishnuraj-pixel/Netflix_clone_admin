import styled from "styled-components";

const Container = styled.section`
  margin: 0 0.25rem;
  transform: translateX(calc(var(--slider-index) * 100%));
  .poster {
    width: 25%;
    aspect-ratio: 5 / 7;
    object-fit: cover;
    padding: 0.25rem;
    border-radius: 1rem;
    transition: var(--transition1);
    cursor: pointer;
  }
  .poster:hover {
    -webkit-transform: scale(1.1);
    opacity: 999999;
    z-index: 999999;
    overflow: hidden;
  }
`;

export default Container;
