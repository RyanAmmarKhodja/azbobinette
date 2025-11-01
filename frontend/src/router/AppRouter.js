import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from "../pages/Home";
//import About from "../pages/About";
// import Contact from "../pages/Contact";
// import NotFound from "../pages/NotFound";
// import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

export default function AppRouter() {
  return (
    <>
      <h1>React App</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NotFound />} /> 404 page */}
        </Routes>
      </Router>
    </>
  );
}
