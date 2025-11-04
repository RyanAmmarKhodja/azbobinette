import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";


const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <Sidebar />
      <div style={{ marginLeft: "90px" }}>
        <Outlet />
      </div>
    </>
  )
}

export default AdminLayout