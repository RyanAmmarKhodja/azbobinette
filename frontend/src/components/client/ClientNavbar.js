import React from "react";
import { NavLink } from "react-router-dom";

const ClientNavbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light" style={{position:"fixed",width:"100vw"}} data-bs-theme="light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
              Azbobinette
            </NavLink>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <NavLink
                    to="/"
                    style={({ isActive }) => ({
                      color: isActive ? "black" : "grey",
                      textDecoration: "none",
                    })}
                  >
                    Accueil
                  </NavLink>
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
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
              
              <li class="nav-item">
                <a class="nav-link" href="#">
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
            <form class="d-flex">
              <input
                class="form-control me-sm-2"
                type="search"
                placeholder="Search"
              />
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">
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
