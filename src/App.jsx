import { useState } from "react";
import Login from "./componenets/login/Login";
import Navbar from "./componenets/navbar/Navbar";
import Signin from "./componenets/SignIn/SignIn";
import ProtectedContent from "./componenets/ProtectedContent/ProtectedContent";
import NewNavbar from "./componenets/navbar/NewNavbar";
import ProductTable from "./componenets/table/ProductTable";
import ImageData from "./componenets/images/ImageData";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [currentPage, setCurrentPage] = useState("navbar");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (username, password) => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    console.log("Entered Username:", username);
    console.log("Entered Password:", password);
    console.log("Stored Username:", storedUsername);
    console.log("Stored Password:", storedPassword);

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
    setIsLoggedIn(true);
    setUsername(username, password);
    setCurrentPage("newnavbar");
  };

  const handleLogout = () => {
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

  if (isLoggedIn) {
    return (
      <div>
        <NewNavbar username={username} handleLogout={handleLogout} />
        <ProductTable />
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar
        handleNavigateToLogin={handleNavigateToLogin}
        handleNavigateToSignIn={handleNavigateToSignIn}
      />
      <ImageData />
    </div>
  );
}

export default App;
