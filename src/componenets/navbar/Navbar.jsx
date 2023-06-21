import "./index.css";
import ImageData from "../images/ImageData";

function Navbar({ handleNavigateToLogin, handleNavigateToSignIn }) {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/assets/Logo.jpg" />
        </div>
        <ul className="navbar-buttons">
          <li>
            <button className="navbar-button" onClick={handleNavigateToLogin}>
              Login
            </button>
          </li>
          <li>
            <button className="navbar-button" onClick={handleNavigateToSignIn}>
              SignIn
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
