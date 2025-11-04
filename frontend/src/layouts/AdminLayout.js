import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/admin/AdminNavbar";
import Sidebar from "../components/admin/Sidebar";


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