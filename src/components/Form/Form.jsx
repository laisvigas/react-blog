import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

function Form() {
    const [nome, setNome] = useState(""); // estado
    const { handleSubmit, register } = useForm();

    function enviarFormulario(dados) {
        console.log(dados)
    }

    function lidarMudancaNome(event) {
        const valor = event.target.value;
        setNome(valor);
    }

    return (
        <form className="form" onSubmit={handleSubmit(enviarFormulario)}>
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
                {...register("email", {
                    required: true, 
                    minLength: 10,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                })}/>

            <label htmlFor="mensagem">Mensagem</label>
            <textarea
                id="mensagem"
                placeholder="Escreva sua mensagem"
                rows="5"
                {...register("mensagem", {
                    required: true,
                    minLength: 10
                })}></textarea>

            <button type="button" onClick={enviarFormulario}>
                Enviar
            </button>
        </form>
    );
}

export default Form;
