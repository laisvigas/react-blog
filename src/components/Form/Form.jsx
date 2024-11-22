import React, { useState } from "react";
import "./Form.css";

function Form() {
    const [nome, setNome] = useState(""); // estado

    function enviarFormulario() {
        window.alert("Formulário Enviado.");
    }

    function lidarMudancaNome(event) {
        const valor = event.target.value;
        setNome(valor);
    }

    return (
        <form className="form">
            <p className="form-preview">Você digitou: {nome}</p>
            <label htmlFor="nome">Nome</label>
            <input
                type="text"
                id="nome"
                placeholder="Digite seu nome"
                value={nome}
                onChange={lidarMudancaNome}
            />

            <label htmlFor="email">E-mail</label>
            <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
            />

            <label htmlFor="mensagem">Mensagem</label>
            <textarea
                id="mensagem"
                placeholder="Escreva sua mensagem"
                rows="5"
            ></textarea>

            <button type="button" onClick={enviarFormulario}>
                Enviar
            </button>
        </form>
    );
}

export default Form;
