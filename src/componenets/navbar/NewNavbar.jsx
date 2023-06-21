function NewNavbar({ username, handleLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/assets/Logo.jpg" />
      </div>
      <ul className="navbar-buttons">
        <li className="username">
          <span>Welcome, {username}!😃</span>
        </li>
        <li>
          <button className="new-navbar-button" onClick={handleLogout}>
            Log Out
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NewNavbar;
