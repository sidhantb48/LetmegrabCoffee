function NewNavbar({ username, handleLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/assets/Logo.jpg" />
      </div>
      <ul className="navbar-buttons">
        <li>
          <span>Welcome, {username}!</span>
        </li>
        <li>
          <button className="navbar-button" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NewNavbar;
