import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound"
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthProvider";

export default function AppRouter() {
  const PrivateRoute = () => {
    const auth = useAuth();
    return auth.token ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />{" "}
        {/* Catch-all route for 404 */}

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}
