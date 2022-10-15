import React from "react";
import Default from "../Templates/Default";

import css from "../../Style/Import.css";
import logo from "../../Images/icon.png";

export default function Logado() {
  return (
    <Default>
      <main className="container-fluid ">
        <div className="container px-4 py-5" id="custom-cards">
          <h2 className="pb-2 border-bottom">Seus Cursos</h2>

          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col">
              <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Full Stack Development
                  </h2>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src={logo}
                        alt="Logo Sideral"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use xlinkHref="#geo-fill"></use>
                      </svg>
                      <small>Iniciar</small>
                    </li>
                    <li className="d-flex align-items-center"></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    User experience Design
                  </h2>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src={logo}
                        alt="Logo Sideral"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use xlinkHref="#geo-fill"></use>
                      </svg>
                      <small>Em andamento</small>
                    </li>
                    <li className="d-flex align-items-center"></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Data Science & Machine Learning
                  </h2>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src={logo}
                        alt="Logo Sideral"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use xlinkHref="#geo-fill"></use>
                      </svg>
                      <small>Concluído</small>
                    </li>
                    <li className="d-flex align-items-center"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Default>
  );
}
