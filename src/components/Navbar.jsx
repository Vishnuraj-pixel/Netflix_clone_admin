import Header from "../assets/styles/Navbar";
import { Logo } from "../services/constants/contants";

function NavBar() {
  return (
    <Header>
      <span className="logo netflix-logo">
        <Logo />
      </span>
      <div className="nav-center">
        <button className="signout-btn">Sign Out</button>
      </div>
    </Header>
  );
}

export default NavBar;
