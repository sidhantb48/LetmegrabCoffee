import { useState, useEffect } from "react";
import Login from "./componenets/login/Login";
import Navbar from "./componenets/navbar/Navbar";
import Signin from "./componenets/SignIn/SignIn";
import ProtectedContent from "./componenets/ProtectedContent/ProtectedContent";
import NewNavbar from "./componenets/navbar/NewNavbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [currentPage, setCurrentPage] = useState("navbar");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (username, password) => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      setIsLoggedIn(true);
      setUsername(username);
      setCurrentPage("newnavbar");
    } else {
      setErrorMessage("Wrong username or password");
      setCurrentPage("login");
    }
  };

  const handleSignIn = (username, password) => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    localStorage.setItem("expirationDate", expirationDate.toISOString());
    setIsLoggedIn(true);
    setUsername(username);
    setCurrentPage("newnavbar");
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("expirationDate");
    setIsLoggedIn(false);
    setUsername("");
    setCurrentPage("navbar");
  };

  const handleNavigateToLogin = () => {
    setCurrentPage("login");
  };

  const handleNavigateToSignIn = () => {
    setCurrentPage("signin");
  };

  const checkExpiration = () => {
    const expirationDate = localStorage.getItem("expirationDate");
    if (expirationDate) {
      const currentDate = new Date();
      if (currentDate > new Date(expirationDate)) {
        handleLogout();
      } else {
        setIsLoggedIn(true); // Update isLoggedIn state if not expired
      }
    }
  };

  useEffect(() => {
    checkExpiration();
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      setCurrentPage("login");
    }
  }, [isLoggedIn]);

  if (currentPage === "login") {
    return (
      <div>
        <Navbar
          handleNavigateToLogin={handleNavigateToLogin}
          handleNavigateToSignIn={handleNavigateToSignIn}
        />
        <Login
          handleLogin={handleLogin}
          handleNavigateToSignIn={handleNavigateToSignIn}
          errorMessage={errorMessage}
        />
      </div>
    );
  }

  if (currentPage === "signin") {
    return (
      <div>
        <Navbar
          handleNavigateToLogin={handleNavigateToLogin}
          handleNavigateToSignIn={handleNavigateToSignIn}
        />
        <Signin handleSignIn={handleSignIn} />
      </div>
    );
  }

  if (currentPage === "newnavbar") {
    return (
      <div>
        <NewNavbar username={username} handleLogout={handleLogout} />
        <h2>Welcome, {username}!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  if (currentPage === "navbar") {
    return (
      <div>
        <Navbar
          handleNavigateToLogin={handleNavigateToLogin}
          handleNavigateToSignIn={handleNavigateToSignIn}
        />
      </div>
    );
  }
}

export default App;
