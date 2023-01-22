import React from "react";

import { Link, useMatch, useResolvedPath } from "react-router-dom";

import logo from "../../Images/icon.png";

import App from "../../App";

import "../../Style/Import.css";

export default function AppHeader() {
  return (
    <header className="pb-3">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <img className="icon" src={logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Página Inicial<span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cadastro">
                Cadastro
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cursos">
                Cursos
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
