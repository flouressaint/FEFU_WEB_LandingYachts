import Button from "./Button";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">NorthY</div>
          <ul className="nav-menu">
            <li className="nav-links">
              <div className="nav-divs">Home</div>
            </li>
            <li className="nav-links">
              <div className="nav-divs">Map</div>
            </li>
            <li className="nav-links">
              <div className="nav-divs">Yachts</div>
            </li>
          </ul>
          <Button value="SIGN UP"></Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
