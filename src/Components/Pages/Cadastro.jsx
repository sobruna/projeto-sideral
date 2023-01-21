import React from "react";

import Default from "../Templates/Default";

import css from "../../Style/Import.css";

// Qual seu nome?
// Qual o seu telefone?
// E-mail
// Qual curso

export default function Cadastro() {
  return (
    <Default>
      <div className="d-flex p-4 mx-5 my-5 flex-column bg-light rounded">
        <h1 className="p-2 align-self-center">
          Comece sua jornada com a gente!
        </h1>
        <form className="container-fluid col-10 col-md-10 col-sm-12 p-2">
          <div className="form-group p-3">
            <label for="NomeCompleto">Qual é o seu nome completo?</label>
            <input
              type="text"
              className="form-control"
              id="NomeCompleto"
              placeholder="Nome Sobrenome"
            />
          </div>
          <div className="form-group p-3">
            <label for="EmailUsuario">Qual é o seu E-mail?</label>
            <input
              type="email"
              className="form-control"
              id="EmailUsuario"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group p-3">
            <label for="EmailUsuario">Digite uma senha:</label>
            <input
              type="senha"
              className="form-control"
              id="SenhaUsuario"
              placeholder="*********"
            />
          </div>
          <div className="form-group p-3">
            <label for="TelefoneUsuario">Qual é o seu telefone?</label>
            <input
              type="tel"
              className="form-control"
              id="TelefoneUsuario"
              placeholder="(00) 00000-0000"
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-2">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </Default>
  );
}
