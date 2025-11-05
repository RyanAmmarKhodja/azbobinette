import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider";

const AdminNavbar = () => {

  const auth = useAuth();
  const navigate = useNavigate();
  const [error, setError] = React.useState(null);

  const submit = async () => {
    try {
      const res = await auth.logout();
      console.log("Logged out", res);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-light"
        style={{ position: "fixed", width: "100vw" }}
        data-bs-theme="light"
      >
        <div className="container-fluid" style={{ paddingLeft: "90px" }}>
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>

                {/* <NavLink
                  to="/about"
                  style={({ isActive }) => ({
                    color: isActive ? "blue" : "black",
                    textDecoration: "none",
                  })}
                ></NavLink> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
            <a className="btn btn-outline-secondary" href="#" onClick={submit} style={{marginLeft: "20px"}}>
                    Logout
                  </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
