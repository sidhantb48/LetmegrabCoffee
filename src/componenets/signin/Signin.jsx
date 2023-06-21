import { useState } from "react";
import "./index.css";

function Signin({ handleSignIn }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || !confirmPassword) {
      setErrorMessage("Incomplete Entries");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    handleSignIn(username, password);
  };
  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form className="signin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="login-link" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Signin;
