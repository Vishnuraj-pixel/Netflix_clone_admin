import styled from "styled-components";

const Container = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 0.6fr 2fr;
  grid-gap: 5px;
  .grid-1 {
    button {
      background: none;
      border: none;
      margin-right: 7px;
      padding: 6px;
      border-radius: var(--borderRadius);
      box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
        rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
      .icon {
        font-size: 1rem;
        color: var(--grey-600);
      }
    }
    .active {
      color: var(--grey-900);
    }
  }
  .grid-2 {
    color: var(--grey-600);
  }
  .grid-3 {
    margin-top: 5px;
  }
`;

export default Container;
