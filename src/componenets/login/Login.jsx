import { useState } from "react";
import "./index.css";

function Login({ handleLogin, handleNavigateToSignIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setErrorMessage("Incomplete Entries");
      return;
    }
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (username !== storedUsername || password !== storedPassword) {
      setErrorMessage("Wrong username or password");
      return;
    }

    setIsLoginSuccess(true);
    handleLogin(username, password);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signup-link" type="submit">
          Login
        </button>
        <button className="signup-link" onClick={handleNavigateToSignIn}>
          SignIn
        </button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
export default Login;
