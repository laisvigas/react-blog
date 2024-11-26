import { buscarPost, salvarPost, editarPost, removerPost } from "../../firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Home() {

    const [posts, setPosts] = useState([]);
    const { handleSubmit, register, reset } = useForm();

    async function salvarP(dados) {
        await salvarPost(dados);
        reset();
        await buscarP();
    }

    async function buscarP() {
        const posts = await buscarPost();
        setPosts(posts);
    }

    async function removerP(id) {
        await removerPost(id);
        buscarP();
    }

    async function editarP(id) {
        const titulo = window.prompt("Edite o título: ");
        const conteudo = window.prompt("Edite o conteúdo: ");
        if(titulo && conteudo) {
            const dados = { titulo, conteudo };
            await editarP(id, dados);
            buscarP();
        }
    }

    useEffect(() => {
        buscarP();
    }, []);

    return (
        <form onSubmit={handleSubmit(salvarP)}>
            <div>
                {posts.map(p => (
                    <div key={p.id} style={{ marginBottom: "20px" }}>
                        <h1>{p.titulo}</h1>
                        {p.imagem && <img src={p.imagem} alt={p.titulo} style={{ maxWidth: "100%", height: "auto" }} />}
                        <p>{p.conteudo}</p>

                        <button type="button" onClick={() => removerP(p.id)}>
                            Excluir Post
                        </button>

                        <button type="button" onClick={() => editarP(p.id)}>
                            Editar Post
                        </button>
                    </div>
                ))}
            </div>

            <div>
                <label htmlFor="titulo">Título</label>
                <input type="text" id="titulo" {...register("titulo")} />
            </div>
            <div>
                <label htmlFor="conteudo">Conteúdo</label>
                <input type="text" id="conteudo" {...register("conteudo")} />
            </div>
            <div>
                <label htmlFor="imagem">Link para a imagem</label>
                <input type="text" id="imagem" {...register("imagem")} />
            </div>

            <button>Adicionar Post</button>
        </form>
    );
}

export default Home;
