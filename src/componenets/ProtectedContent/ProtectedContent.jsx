import NewNavbar from "../navbar/NewNavbar";

function ProtectedContent({ username, handleLogout }) {
  return (
    <div>
      <NewNavbar username={username} handleLogout={handleLogout} />
      {/* <h1>Welcome, {username}!</h1> */}
    </div>
  );
}

export default ProtectedContent;
