import React from "react";

import { Link, useMatch, useResolvedPath } from "react-router-dom";

import logo from "../../Images/icon.png";

import "../../Style/Import.css";

export default function AppFooter() {
  return (
    <div className="footer-style w-100 pt-4 container-fluid">
      <footer className="h-auto row pt-4 pb-6 px-5 d-flex justify-content-between">
        <div className="col-3">
          <h5 className="text-white">Institucional</h5>
          <ul className="nav flex-column pb-3">
            <li className="nav-item mb-2">
              <Link to="/sobre" className="nav-link p-0 text-white">
                Sobre a Sideral
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/termos-de-uso" className="nav-link p-0 text-white">
                Termos de Uso
              </Link>
            </li>
            {/* <li className="nav-item mb-2">
              <Link to="/trabalhe-conosco" className="nav-link p-0 text-white">
                Trabalhe Conosco
              </Link>
            </li> */}
          </ul>
        </div>

        <div className="col-3">
          <h5 className="text-white">Sobre os Cursos</h5>
          <ul className="nav flex-column pb-3">
            <li className="nav-item mb-2">
              <Link to="/cursos" className="nav-link p-0 text-white">
                Cursos
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/instrutores" className="nav-link p-0 text-white">
                Instrutores
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/cadastro" className="nav-link p-0 text-white">
                Cadastro
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-3 align-right">
          <h5 className="text-white pb-1">Entre em contato com a gente!</h5>
          <ul className="nav flex-column pb-3">
            <li className="nav-item mb-2 ">
              <Link to="/" className="nav-link p-0 text-white">
                Telefone: (11) 5666-6666
                <p>Atendimento das 9:00 às 18:00</p>
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-white">
                WhatsApp - 11 95432-9876
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-white">
                suporte@sideral.com.br
              </Link>
            </li>
          </ul>
        </div>
        {/* Social-media */}
        <div className="col-md-auto">
          <ul className="nav flex-column pb-3">
            <li className="nav-item mb-2 mt-2">
              <Link
                to="/ttps://www.instagram.com"
                className="nav-link p-0 text-white"
              >
                <i class="fa-brands fa-instagram fa-2xl"></i>
              </Link>
            </li>
            <li className="nav-item mb-2 mt-2">
              <Link
                to="/ttps://www.twitter.com"
                className="nav-link p-0 text-white"
              >
                <i class="fa-brands fa-twitter fa-2xl"></i>
              </Link>
            </li>
            <li className="nav-item mb-2 mt-2">
              <Link
                to="/ttps://www.facebook.com"
                className="nav-link p-0 text-white"
              >
                <i className="fa-brands fa-square-facebook fa-2xl"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-auto">
          <ul className="nav flex-column pb-3">
            <li className="nav-item mb-2 mt-2">
              <Link
                to="/ttps://www.linkedin.com#"
                className="nav-link p-0 text-white"
              >
                <i class="fa-brands fa-linkedin fa-2xl"></i>
              </Link>
            </li>
            <li className="nav-item mb-2 mt-2">
              <Link
                to="/ttps://www.youtube.com"
                className="nav-link p-0 text-white"
              >
                <i class="fa-brands fa-youtube fa-2xl"></i>
              </Link>
            </li>
            <li className="nav-item mb-2 mt-2">
              <Link
                to="/ttps://www.tiktok.com"
                className="nav-link p-0 text-white"
              >
                <i class="fa-brands fa-tiktok fa-2xl"></i>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
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
