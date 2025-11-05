import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/admin/AdminNavbar";
import Sidebar from "../components/admin/Sidebar";
import AdminHeader from "../components/admin/AdminHeader";  

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <Sidebar />
      <div style={{ marginLeft: "80px", marginTop: "60px", padding: "20px" }}>
      <AdminHeader />
        <Outlet />
      </div>
    </>
  )
}

export default AdminLayout