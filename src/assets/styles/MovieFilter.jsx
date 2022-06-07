import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  min-height: 19%;
  background: var(--white-smoke);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 2rem;
  .catagory {
    font-size: 1rem;
    text-transform: capitalize;
    line-height: 1.25;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .flex {
    display: flex;
    .catagoryName {
      font-family: "Work Sans", sans-serif;
      background: transparent;
      color: var(--grey-700);
      margin: 0 0.4rem 0 0;
      border: none;
      font-weight: 700;
      font-size: 0.9rem;
    }
    .catagoryName:hover {
      transition: var(--transition);
      text-decoration: underline;
      color: var(--grey-500);
      cursor: pointer;
    }
  }
  .searchWrapper {
    width: 40%;
    height: 30px;
    border: 1px solid var(--grey-500);
    border-radius: 20px;
    padding-left: 0.9rem;
    display: inline-flex;
    justify-content: center;
    .search-input {
      height: 100%;
      width: 86%;
      background: none;
      border: none;
    }
    .icon {
      font-size: 1.7rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      color: var(--grey-500);
    }
    .icon:hover {
      color: var(--grey-700);
      transition: var(--transition);
    }
  }
`;

export default Container;
