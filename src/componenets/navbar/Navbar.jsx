import "./index.css";

function Navbar({ handleNavigateToLogin, handleNavigateToSignIn }) {
  return (
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
            Sign In
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
