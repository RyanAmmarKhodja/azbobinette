import React from "react";
import { NavLink } from "react-router-dom";

const ClientNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light" style={{position:"fixed",width:"100vw", zIndex: 10}} data-bs-theme="light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
              Azbobinette
            </NavLink>
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
                  <NavLink
                    to="/"
                    style={({ isActive }) => ({
                      color: isActive ? "black" : "grey",
                      textDecoration: "none",
                    })}
                  >
                    Accueil
                  </NavLink>
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink
                    to="/catalogue"
                    style={({ isActive }) => ({
                      color: isActive ? "black" : "grey",
                      textDecoration: "none",
                    })}
                  >
                    Catalogue
                  </NavLink>
                </a>

              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink
                    to="/about"
                    style={({ isActive }) => ({
                      color: isActive ? "black" : "grey",
                      textDecoration: "none",
                    })}
                  >
                    A propos
                  </NavLink>
                </a>
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default ClientNavbar;
