import { useState } from "react";
import "./Post.css";
import Header from "../Header/Header";
import { editarPst, removerPst } from "../../firebase/firestore";

function Post(props) {

    const [curtidas, setCurtidas] = useState(0); // [estado, funcao modificadora]
    const [carregando, setCarregando] = useState(true);
    const [descurtidas, setDescurtidas] = useState(0);

    async function removerPost() {
        await removerPst(props.id);
        props.buscarPosts();
    }

    async function editarPost() {
        const titulo = window.prompt("Digite o tiulo", props.titulo);
        if (titulo) {
            await editarPst(props.id, { titulo });
            props.buscarPosts();
        }
    }

    function adicionarCurtida() {
        setCurtidas(curtidas + 1);
    }

    setTimeout(() => {
        setCarregando(false);
    }, 3000);

    if (carregando) {
        return (
            <div className="post">
                <p>Carregando...</p>
            </div>
        );
    }

    return (
        <div className="post">
            <h1>{props.titulo}</h1>

            <img src={props.imagem} alt="Publicação" width={400} />

            <p>{props.conteudo}</p>
            <p>
                <small>{props.autor}</small>
            </p>

            <button onClick={adicionarCurtida}>
                Curtidas: {curtidas}
            </button>

            <button onClick={() => {
                setDescurtidas(descurtidas + 1);
            }}>
                Descurtidas: {descurtidas}
            </button>

            <button onClick={() => {
                window.alert(props.conteudo);
            }}>
                Detalhes
            </button>

            <button onClick={removerPost}>
                Excluir
            </button>

            <button onClick={editarPost}>
                Editar
            </button>

            {curtidas > 10 ? <p>Post Popular!</p> : null}
        </div>
    );
}

export default Post;