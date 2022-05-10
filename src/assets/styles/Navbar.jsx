import styled from "styled-components";

const Header = styled.nav`
  display: flex;
  align-items: space-around;
  justify-content: space-between;
  height: var(--nav-height);
  background: transparent;
  padding: 0 2rem;
  border-bottom: 2px solid #e6e6e6;
  width: 100%;
  .logo {
    display: flex;
    align-items: center;
    width: 15%;
  }
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .signout-btn {
      background: transparent;
      border: none;
      font-size: 20px;
      font-weight: bold;
    }
    .signout-btn:hover {
      text-decoration: underline;
    }
  }
`;

export default Header;
