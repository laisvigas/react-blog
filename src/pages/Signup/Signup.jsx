import { useForm } from "react-hook-form";
import { buscarUs, editarUs, removerUs, salvarUs } from "../../firebase/firestore";
import { useEffect, useState } from "react";
import { cadastrar } from "../../firebase/authentication";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [usuarios, setUsuarios] = useState([]);
    const { handleSubmit, register, reset } = useForm();
    const navigate = useNavigate();

    async function salvarUsuario({email, senha, nome}) {
        try {
        const usuario = await cadastrar(email, senha);
        await salvarUs({
            email,
            senha,
            nome,
            authId: usuario.uid
        });
        reset();
        buscarUsuarios();
        window.alert("Usuário cadastrado.");
        navigate("/Login");
        } catch(erro) {
            window.alert("Algo deu errado");
            console.error(erro); 
        }
    }

    async function buscarUsuarios() {
        const usuarios = await buscarUs();
        setUsuarios(usuarios);
    }

    async function removerUsuario(id) {
        await removerUs(id);
        buscarUsuarios();
    }

    async function editarUsuario(id) {
        const nome = window.prompt("Digite o nome: ");
        const email = window.prompt("Digite o email: ");
        if(nome && email) {
            const dados = { nome, email };
            await editarUs(id, dados);
            buscarUsuarios();
        }
    }

    useEffect(() => {
        buscarUsuarios();
    }, []);

    return(
        <form onSubmit={handleSubmit(salvarUsuario)}>
            <h1>Cadastre-se</h1>

            <table border="2">
                <tbody>
                    {usuarios.map(us => 
                    <tr key={us.id}>
                        <td>{us.id} </td>
                        <td>{us.nome}</td>
                        <td>{us?.email}</td>
                        <td>
                            <button type="button" onClick={() => removerUsuario(us.id)}>
                                Excluir
                            </button>
                        </td>
                        <td>
                            <button type="button" onClick={() => editarUsuario(us.id)}>
                                Editar
                            </button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>

            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" {...register("nome")} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" {...register("email")} />
            </div>
            <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" {...register("senha")} />
            </div>
            <button>
                Criar
            </button>
        </form>
    );
}

export default Signup;