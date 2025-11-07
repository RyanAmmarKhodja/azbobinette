import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Login from "../pages/admin/Login";
import PageNotFound from "../pages/PageNotFound";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthProvider";
import ClientLayout from "../layouts/ClientLayout";
import AdminLayout from "../layouts/AdminLayout";
import Families from "../pages/admin/Families";
import Animals from "../pages/admin/Animals";
import Home from "../pages/client/Home";
import Catalogue from "../pages/client/Catalogue";
import About from "../pages/client/About";

export default function AppRouter() {
  const PrivateRoute = () => {
    const auth = useAuth();
    return auth.token ? <AdminLayout /> : <Navigate to="/login" />;
  };

  function PublicRoute() {
    const auth = useAuth();
    return auth.token ? <AdminLayout /> : <ClientLayout />;  // To be fixed
  }

  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/about" element={<About />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/families" element={<Families />} />
          <Route path="/admin/families/add" element={<Families showModal={true} />} />
          <Route path="/admin/animals" element={<Animals />} />
          <Route path="/admin/animals/add" element={<Animals showModal={true} />} />
        </Route>
      </Routes>
    </>
  );
}
