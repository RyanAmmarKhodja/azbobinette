import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Login from "../pages/admin/Login";
import PageNotFound from "../pages/PageNotFound";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthProvider";
import ClientLayout from "../layouts/ClientLayout";
import AdminLayout from "../layouts/AdminLayout";
import AddAnimal from "../pages/admin/AddAnimal";
import ViewAnimals from "../pages/admin/ViewAnimals";

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
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/animals" element={<AddAnimal />} />
          <Route path="/view_animals" element={<ViewAnimals />} />
        </Route>
      </Routes>
    </>
  );
}
