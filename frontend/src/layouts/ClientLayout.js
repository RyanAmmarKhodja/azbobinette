import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/client/ClientNavbar";

export default function ClientLayout() {
  return (
    <>
      <PublicNavbar />
      <div style={{ padding: "20px", paddingTop: "70px"}}>
        <Outlet />
      </div>
    </>
  );
}
