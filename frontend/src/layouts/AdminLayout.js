import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/admin/Sidebar";
import AdminHeader from "../components/admin/AdminHeader";  

const AdminLayout = () => {
  return (
    <>
      <Navbar loggedIn={true} />
      <Sidebar />
      <div style={{ marginLeft: "80px", marginTop: "60px", padding: "20px", minHeight: "100vh", overflowX: "hidden" }}>
      <AdminHeader />
        <Outlet />
      </div>
    </>
  )
}

export default AdminLayout