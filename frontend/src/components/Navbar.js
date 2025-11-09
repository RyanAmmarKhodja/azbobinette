import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const auth = useAuth();
  const navigate = useNavigate();
  const [error, setError] = React.useState(null);
  const jungleActive = { color: "#1C7435", fontWeight: "bold" };
  

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
        style={{ position: "fixed", width: "100vw", zIndex: 10 }}
        data-bs-theme="light"
      >
        <div className="container-fluid" style={props.loggedIn ? { paddingLeft: "90px" } : { }}>
          <NavLink
            className={"navbar-brand"}
            to="/"
            style={{
              textDecoration: "none",
              color: "#1C7435",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            Azbobinette
          </NavLink>

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
                <NavLink
                  className={"nav-link"}
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? jungleActive.color : "grey",
                    textDecoration: "none",
                    fontWeight: isActive ? jungleActive.fontWeight : "normal",
                  })}
                >
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={"nav-link"}
                  to="/catalogue"
                  style={({ isActive }) => ({
                    color: isActive ? jungleActive.color : "grey",
                    textDecoration: "none",
                    fontWeight: isActive ? jungleActive.fontWeight : "normal",
                  })}
                >
                  Animaux
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-jungle my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
            {props.loggedIn &&<a
              className="btn btn-outline-secondary"
              href="#"
              onClick={submit}
              style={{ marginLeft: "20px" }}
            >
              Logout
            </a>}
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
