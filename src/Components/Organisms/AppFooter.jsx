import React from "react";

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
              <a href="#" className="nav-link p-0 text-white">
                Sobre a Sideral
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Termos de Uso
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Trabalhe Conosco
              </a>
            </li>
          </ul>
        </div>

        <div className="col-3">
          <h5 className="text-white">Sobre os Cursos</h5>
          <ul className="nav flex-column pb-3">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Cursos
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Instrutores
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Cadastro
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Depoimentos de Alunos
              </a>
            </li>
          </ul>
        </div>
        <div className="col-3 align-right">
          <h5 className="text-white pb-1">Entre em contato com a gente!</h5>
          <ul className="nav flex-column pb-3">
            <li className="nav-item mb-2 ">
              <a href="#" className="nav-link p-0 text-white">
                Telefone: (11) 5666-6666
                <p>Atendimento das 9:00 às 18:00</p>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                WhatsApp - 11 95432-9876
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                suporte@sideral.com.br
              </a>
            </li>
          </ul>
        </div>
        {/* Social-media */}
        <div className="col-md-auto">
          <ul className="nav flex-column pb-3">
            <li className="nav-item mb-2 mt-2">
              <a
                href="https://www.instagram.com"
                className="nav-link p-0 text-white"
              >
                <i class="fa-brands fa-instagram fa-2xl"></i>
              </a>
            </li>
            <li className="nav-item mb-2 mt-2">
              <a
                href="https://www.twitter.com"
                className="nav-link p-0 text-white"
              >
                <i class="fa-brands fa-twitter fa-2xl"></i>
              </a>
            </li>
            <li className="nav-item mb-2 mt-2">
              <a
                href="https://www.facebook.com"
                className="nav-link p-0 text-white"
              >
                <i className="fa-brands fa-square-facebook fa-2xl"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-auto">
          <ul className="nav flex-column pb-3">
            <li className="nav-item mb-2 mt-2">
              <a
                href="https://www.linkedin.com#"
                className="nav-link p-0 text-white"
              >
                <i class="fa-brands fa-linkedin fa-2xl"></i>
              </a>
            </li>
            <li className="nav-item mb-2 mt-2">
              <a
                href="https://www.youtube.com"
                className="nav-link p-0 text-white"
              >
                <i class="fa-brands fa-youtube fa-2xl"></i>
              </a>
            </li>
            <li className="nav-item mb-2 mt-2">
              <a
                href="https://www.tiktok.com"
                className="nav-link p-0 text-white"
              >
                <i class="fa-brands fa-tiktok fa-2xl"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
