import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/ClientNavbar";

export default function ClientLayout() {
  return (
    <>
      <PublicNavbar />
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </>
  );
}
