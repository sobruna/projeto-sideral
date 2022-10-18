import React from "react";
import Default from "../Templates/Default";
import css from "../../Style/Import.css";
import logo from "../../Images/icon.png";
import loginimg from "../../Images/login.jpg";

export default function Login() {
  return (
    <Default>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={loginimg}
                      alt="login form"
                      className="img-fluid p-5"
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex mb-3 pb-1 justify-content-center">
                          <span className="h1 fw-bold mb-3 mx-2">
                            Entre na sua conta:
                          </span>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="UserEmail"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="form2Example17">
                            E-mail
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="UserPassword"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="form2Example27">
                            Senha
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                          >
                            Login
                          </button>
                        </div>

                        <a className="small text-muted" href="#!">
                          Esqueceu sua senha?
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6>
          Imagem de{" "}
          <a href="https://br.freepik.com/vetores-gratis/fundo-de-foguete-de-construcao-de-equipe_4443347.htm#query=foguete&position=7&from_view=search&track=sph">
            Freepik
          </a>
        </h6>
      </section>
    </Default>
  );
}
