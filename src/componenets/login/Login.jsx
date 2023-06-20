import { useState } from "react";

function Login({ handleLogin, handleNavigateToSignIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setErrorMessage("Incomplete entries");
      return;
    }
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (username !== storedUsername || password !== storedPassword) {
      setErrorMessage("Wrong username or password");
      return;
    }

    setIsLoginSuccess(true);
    handleLogin(username);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <button onClick={handleNavigateToSignIn}>Sign In</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
export default Login;
