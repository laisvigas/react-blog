import { useEffect, useState } from "react";
import { buscarPst, salvarPst } from "../../firebase/firestore";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/Auth";
import { Navigate, Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function FormPost({ buscarPosts }) {
    const { handleSubmit, register, reset } = useForm();

    async function salvarPost(dados) {
        await salvarPst(dados);
        buscarPosts();
        reset();
    }

    return (
        <form onSubmit={handleSubmit(salvarPost)}>
            <div>
                <label htmlFor="titulo">Titulo</label>
                <input type="text" id="titulo" {...register("titulo")} />
            </div>
            <div>
                <label htmlFor="conteudo">Conteudo</label>
                <input type="text" id="conteudo" {...register("conteudo")} />
            </div>
            <div>
                <label htmlFor="autor">Autor</label>
                <input type="text" id="autor" {...register("autor")} />
            </div>
            <div>
                <label htmlFor="imagem">Imagem</label>
                <input type="text" id="imagem" {...register("imagem")} />
            </div>
            <button>Postar</button>
        </form>
    );
}

function Home() {
    const [posts, setPosts] = useState([]);
    const { autenticado } = useAuth();

    async function buscarPosts() {
        const posts = await buscarPst();
        setPosts(posts);
    }

    useEffect(() => {
        buscarPosts();
    }, []);

    //bloqueador
    if (!autenticado) return <Navigate to="/Login" />;

    return (
        <>
            <div className="d-flex flex-wrap">
                {posts.map((post) => (
                    <Card key={post.id} style={{ width: "18rem", margin: "1rem" }}>
                        <Card.Img
                            variant="top"
                            src={post.imagem}
                            alt={post.titulo}
                            className="img-fluid"
                            style={{ objectFit: "cover", height: "200px", width: "100%" }}
                        />
                        <Card.Body>
                            <Card.Title>{post.titulo}</Card.Title>

                            <Link to={`/post/${post.id}`}>
                                <button className="btn btn-success">Ver artigo completo</button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>

            <h2>Adicionar novo Post</h2>

            <FormPost buscarPosts={buscarPosts} />
        </>
    );
}

export default Home;
