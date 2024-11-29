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
        <form onSubmit={handleSubmit(salvarPost)} className="needs-validation container mt-4">
            <div className="mb-3">
                <label htmlFor="titulo" className="form-label">Título</label>
                <input 
                    type="text" 
                    id="titulo" 
                    className="form-control" 
                    {...register("titulo")} 
                    placeholder="Digite o título do post"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="conteudo" className="form-label">Conteúdo</label>
                <textarea 
                    id="conteudo" 
                    className="form-control" 
                    {...register("conteudo")} 
                    placeholder="Digite o conteúdo do post"
                    rows="3"
                ></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="autor" className="form-label">Autor</label>
                <input 
                    type="text" 
                    id="autor" 
                    className="form-control" 
                    {...register("autor")} 
                    placeholder="Digite o nome do autor"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="imagem" className="form-label">Imagem (URL)</label>
                <input 
                    type="url" 
                    id="imagem" 
                    className="form-control" 
                    {...register("imagem")} 
                    placeholder="Insira a URL da imagem"
                />
            </div>
            <button type="submit" className="btn btn-primary w-100">Postar</button>
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
            <div className="d-flex flex-wrap justify-content-center">
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
    
            <h2 className="text-center mt-4">Adicionar novo Post</h2>
    
            <FormPost buscarPosts={buscarPosts} />
        </>
    );
    
}

export default Home;
