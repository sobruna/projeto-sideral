import React from "react";

import logo from "../../Images/icon.png";

import Home from "../Pages/Home";
import Cadastro from "../Pages/Cadastro";
import Cursos from "../Pages/Cursos";
import DepoimentosDeAlunos from "../Pages/DepoimentosDeAlunos";
import Instrutores from "../Pages/Instrutores";
import Login from "../Pages/Login";
import SideralNaImprensa from "../Pages/SideralNaImprensa";
import SobreASideral from "../Pages/SobreASideral";
import TermosDeUso from "../Pages/TermosDeUso";
import TrabalheConosco from "../Pages/TrabalheConosco";

import App from "../../App";

import "../../Style/Import.css";

export default function AppHeader() {
  return (
    <header className="pb-3">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img className="icon" src={logo} />
        </a>
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
              <a className="nav-link" href="#">
                Home<span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cadastro
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cursos
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
