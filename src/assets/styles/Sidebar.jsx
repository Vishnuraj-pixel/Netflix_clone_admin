import styled from "styled-components";

const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--subnav-height);
  background: var(--white-smoke);
  opacity: 999999;
  z-index: 1;
  padding: 0 20rem;
  .subnav-center {
    .subnav-ul {
      display: flex;
      margin: 0;
      padding: 0;
      .nav-links {
        display: flex;
        align-items: center;
        padding: 2rem 0;
        color: var(--grey-200);
        font-weight: 700;
        padding-left: 4.5rem;
        text-transform: capitalize;
        transition: var(--transition);
      }
      .icon {
        font-size: 1.5rem;
        margin-right: 1rem;
        display: grid;
        place-items: center;
        transition: var(--transition);
      }
      .active {
        color: var(--grey-400);
      }
    }
  }
`;

export default Header;
