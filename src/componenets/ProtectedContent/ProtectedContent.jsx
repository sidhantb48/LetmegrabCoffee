import NewNavbar from "../navbar/NewNavbar";
import ProductTable from "../table/ProductTable";

function ProtectedContent({ username, handleLogout }) {
  return (
    <div>
      <NewNavbar username={username} handleLogout={handleLogout} />
      {/* <h1>Welcome, {username}!</h1> */}
      <ProductTable />
    </div>
  );
}

export default ProtectedContent;
